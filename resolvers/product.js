exports.Products = {
  category: ({ category_id }, args, { db }) => {
    return db.categories.find((category) => category.id == category_id);
  },
  reviews: ({ id }, args, { db }) => {
      return db.reviews.filter((review) => review.productId == id);
  },
};
