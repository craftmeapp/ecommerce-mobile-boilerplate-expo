import { createSelector } from 'reselect';

const productsSelector = state => state.products.items;

export const productsByCategoriesSelector = createSelector(
  productsSelector,
  products => {
    const result = {};

    products.forEach(product => {
      const categoryId = parseInt(product.category, 10);

      if (result[categoryId]) {
        result[categoryId].push(product);
      } else {
        result[categoryId] = [product];
      }
    });

    return result;
  },
);
