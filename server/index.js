const { ApolloServer } = require('apollo-server');
const typeDefs = require('');
const resolvers = require('');
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT, () => {
  console.log(`App is listening at http://localhost${PORT}/graphql`);
});