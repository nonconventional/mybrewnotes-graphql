const { ApolloServer, gql } = require('apollo-server');

const BrewApi = require('./data-sources/brews');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  dataSources: () => ({
    brewsAPI: new BrewApi()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
