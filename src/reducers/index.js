import { combineReducers } from 'redux';
import CatalogReducer from './catalog';
import ProductsReducer from './products';
import RegionsReducer from './regions';
import PricesReducer from './prices';
import CartReducer from './cart';

const rootReducer = combineReducers({
  catalog: CatalogReducer,
  products: ProductsReducer,
  regions: RegionsReducer,
  prices: PricesReducer,
  cart: CartReducer,
});

export default rootReducer;
