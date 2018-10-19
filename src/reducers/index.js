import { combineReducers } from 'redux';
import CatalogReducer from './catalog';
import ProductsReducer from './products';
import RegionsReducer from './regions';

const rootReducer = combineReducers({
  catalog: CatalogReducer,
  products: ProductsReducer,
  regions: RegionsReducer,
});

export default rootReducer;