exports.categorys = {
  products: ({ id }, { filter }, { db }) => {
    
    let filter_product = db.products;
    filter?.onSale
      ? (filter_product = db.products.filter((product) => product.onSale))
      : filter_product;
    return filter_product.filter((category) => category.category_id == id);
  },
};
