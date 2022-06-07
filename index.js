const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { db} = require("./db");


const { Query, Products, categorys  ,Mutation} = require("./resolvers");




const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Products, categorys ,Mutation },
  context : {db}
});

server.listen().then(({ url }) => {
  console.log("listening for server " + url);
});
