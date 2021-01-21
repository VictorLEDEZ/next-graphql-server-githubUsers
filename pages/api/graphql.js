// We have a GraphQL Schema and a GraphQL resolver now, we combine them and build up the GraphQL Server thanks to Apollo
import { ApolloServer } from 'apollo-server-micro';
// We import the schemas and the resolvers within our API file
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

// we use apolloServer to create a new instance and then pass in the schema and the resolver to create a GraphQL server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// In the confing, we tell Next.js not to parse the incoming request and let GraphQL handle it for us.
export const config = {
  api: {
    bodyParser: false,
  },
};

// We use apolloServer to create a new handler, which means the path /api/graphql will serve as an entry point for our GraphQL server.
export default apolloServer.createHandler({ path: '/api/graphql' });
