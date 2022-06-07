const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    product(filter: Product_Filter): [Products]
    specific_product(id: ID!): Products
    category(id: ID!): categorys
    categorys_List: [categorys]
    review: [review]
  }
  type review {
    id: ID
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID
  }
  type Products {
    id: ID
    name: String!
    description: String
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean
    category: categorys
    reviews: [review]
  }
  type categorys {
    id: ID
    name: String
    products(filter: Product_Filter): [Products]
  }
  input Product_Filter {
    onSale: Boolean
    rateLimit: Int
    avarate: Int
  }

  # ///////////////////// mutations /////////////////////
  type Mutation {
    addCategory(input: AddCategoryInput): categorys
    addProduct(input: AddProductInput): Products

    removeCategory(id: ID): Boolean
    removeProduct(id: ID): Boolean

    upDateProduct(input: AddProductInput, id: ID): Products
    upDateCategory(input: AddCategoryInput, id: ID): categorys
  }

  input AddCategoryInput {
    id: ID
    name: String
  }
  input AddProductInput {
    name: String!
    description: String
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean
    category: String
  }
`;
