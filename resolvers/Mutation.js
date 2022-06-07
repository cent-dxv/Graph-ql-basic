const { v4: uuid } = require("uuid");
const { products } = require("../db");

exports.Mutation = {
  ////////////// add ///////////////
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name: name,
    };

    db.categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description, price, onSale, quantity, category } = input;
    const newproduct = {
      name: name,
      description: description,
      price: price,
      onSale: onSale,
      quantity: quantity,
      catagory_id: category,
    };
    db.products.push(newproduct);
    return newproduct;
  },
  ////////////////////// remove ///////////////////
  removeCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((product) => product.id !== id);
    console.log(db.products);
    db.products = db.products.filter((product) => {
      if (product.category_id === id)
        return {
          ...product,
          category_id: null,
        };
      else return product;
    });

    console.log(db.categories.filter((product) => product.id !== id));

    return true;
  },

  removeProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((product) => product.productId !== id);
    return true;
  },

  //////////////////////update ///////////////////////
  upDateProduct: (parent, { id, input }, { db }) => {
    db.products = db.products.map((product) => {
      if (product.id === id)
        return {
          ...product,
          name: input.name,
          price: input.price,
          quantity: input.quantity,
        };
      else return product;
    });
    const updatePoduct = db.products.find((product) => product.id === id);
    return updatePoduct;
  },

  upDateCategory: (parent, { id, input }, { db }) => {
    db.categories = db.categories.map((product) => {
      if (product.id === id)
        return {
          ...product,
          name: input.name,
        };
      else return product;
    });
    const updatePoduct = db.categories.find((product) => product.id === id);
    return updatePoduct;
  },
};
