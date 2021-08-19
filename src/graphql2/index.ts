import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql2/schemasMap';

const apolloServer = new ApolloServer({
  schema,
});

//TODO: apollo server 3.0
// await apolloServer.start();

export default apolloServer;
