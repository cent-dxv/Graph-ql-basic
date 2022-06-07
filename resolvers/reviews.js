exports.review = {

  category: ({ category_id }, args, { db }) => {
    return db.categories.find((category) => category.id == category_id);
  },
}