import { gql } from 'apollo-server-micro';

// We define our schema by assigning the nodes; here the user
export const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }
`;
// also, we define a query for retrieving all the users or just one user by its name property

// In this project, resolvers and schemas are separated in two different folders

// getUsers is an array of users defined by [User]
// getUsers is simply a type of User
