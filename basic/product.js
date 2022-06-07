const { ApolloServer, gql } = require("apollo-server");
const { products, categories } = require("./initial_data");

const typeDefs = gql`
  type Query {
    product: [Products]
    specific_product(id: ID!): Products
    category(id: ID!): categorys
  }
  type Products {
    name: String!
    description: String
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean
    # category: [category_in]!
  }
  type categorys {
    name: String
  }
`;

const resolvers = {
  Query: {
    product: () => {
      return products;
    },
    specific_product: (parent, { id }) => {
      categorie = products.find((product) => product?.id == id);
      return categorie ? categorie : null;
    },
    category: (parent, { id }) => {
      console.log("id is " + id);
      const categoryid = products.find((product) => product.id == id);
      const category_id = categoryid.category_id
        ? categoryid.category_id
        : null;
      console.log(" catalog " + categoryid.category_id);
      const categorie = categories.find(
        (category) => category.id == category_id
      );
      return categorie ? categorie : null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log("listening for server " + url);
});
