import 'graphql-import-node';
import * as userTypeDefs from './schemas/user.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { UserResolvers } from '@src/graphql-api/resolvers/UserResolver';

const resolverMap: IResolvers = merge(UserResolvers);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers: resolverMap,
});
export default schema;
