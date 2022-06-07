exports.Query = {
  product: (parent, { filter }, { db }) => {
    let filterproducts = db.products;
    filter?.onSale
      ? (filterproducts = db.products.filter((product) => product.onSale))
      : filterproducts;

    // if (filter?.rateLimit) {
    //   const product_Id = reviews.filter((product) => product.rating > filter.rateLimit);
    //   const productId =product_Id.filter((product)=> product.productId)

    //   filterproducts = products.filter((product) =>  productId.filter((products) => products.id) );
    // }

    if (filter?.avarate) {
      filterproducts = db.products.filter((product) => {
        let sumRating = 0;
        let numberOfReviews = 0;
        db.reviews.forEach((review) => {
          if (db.review.productId == product.id) {
            sumRating += review.rating;
            numberOfReviews++;
          }
        });
        const avgProductRating = sumRating / numberOfReviews;
        console.log(avgProductRating);
        return avgProductRating >= filter.avarate;
      });
    }
    return filterproducts;
  },
  specific_product: (parent, { id }, { products, categories }) => {
    categorie = products.find((product) => product?.id == id);
    return categorie ? categorie : null;
  },
  category: (parent, { id }, { products, categories }) => {
    const categoryid = products.find((product) => product.id == id);
    return categories.find((product) => product.id == id);
  },
  categorys_List: (parent, args, { db }) => {
    return db.categories;
  },
  review: (parent, args, { db }) => {
  
    return db.reviews;
  },
};
