// A GraphQL resolver is a set of functions that allows you to generate a response from a GraphQL query.
// Axios helps to write requests such as POST, GET, DELETE, PUT and PATCH
import axios from 'axios';

export const resolvers = {
  Query: {
    // Gets all the users
    getUsers: async () => {
      try {
        //   We call the GET method from axios that points to the github api
        // Wait until there is a response
        const users = await axios.get('https://api.github.com/users');
        // L'opérateur await permet d'attendre la résolution d'une promesse (Promise). Il ne peut être utilisé qu'au sein d'une fonction asynchrone (définie avec l'instruction async function).
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
        // If there is an error, we throw an error to the console
      }
    },

    // Find one user by ID
    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
