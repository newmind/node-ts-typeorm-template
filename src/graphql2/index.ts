import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql2/schemasMap';

const apolloServer = new ApolloServer({
  schema,
});

//TODO: apollo server 3.0 > 에서는 필수, 그래도 작동 안함
console.log('apollo starting...');
(async () => {
  await apolloServer.start();
})().then();

export default apolloServer;
