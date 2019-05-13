import { ApolloServer } from 'apollo-server';
require('dotenv').config();

import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './schema';
import BrewApi from './data-sources/brews';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    brewsAPI: new BrewApi()
  }),
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  tracing: environment.apollo.trace
});

server.listen({ port: environment.port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
