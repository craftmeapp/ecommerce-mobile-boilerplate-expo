import { createSelector } from 'reselect';
import { currentRegionSelector } from './regions';
import { pricesSelector } from './prices';

const cartSelector = state => state.cart.items;

export const totalSelector = createSelector(
  cartSelector,
  pricesSelector,
  currentRegionSelector,
  (items, prices, currentRegion) => items.reduce((acc, cur) => {
    const price = prices.find(item => item.region === currentRegion && item.dish === cur.id);
    return acc + cur.amount * price.cost;
  }, 0),
);
