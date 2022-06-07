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
    category: categorys
  }
  type categorys {
    id: ID
    name: String
    product_cat: [Products]
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
    
        categorie = categories.find((product) => product?.id == id);
        return categorie ? categorie : null;
    },
},
Products :{
    category: ({category_id} ,args) =>{
console.log(category_id)
return categories.find(categories => categories.id == category_id)
    }
},
  categorys : {
 
    product_cat(parent , args) {
        
     
        return products.filter((product)=> product.category_id == parent.id )
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log("listening for server " + url);
});
