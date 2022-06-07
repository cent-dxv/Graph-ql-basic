const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hellow: String
    presedent: String
    population: Int!
  }
`;

const resolvers = {
  Query: {
    hellow: () => {
      return "north korians";
    },
    presedent: () => {
      return "kim jon u";
    },
    population: () => {
      return 12, 000;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log("listening for server " + url);
});
