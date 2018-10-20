import { combineReducers } from 'redux';
import CatalogReducer from './catalog';
import ProductsReducer from './products';
import RegionsReducer from './regions';
import PricesReducer from './prices';

const rootReducer = combineReducers({
  catalog: CatalogReducer,
  products: ProductsReducer,
  regions: RegionsReducer,
  prices: PricesReducer,
});

export default rootReducer;