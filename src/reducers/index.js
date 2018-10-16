import { combineReducers } from 'redux';
import CatalogReducer from './catalog';
import ProductsReducer from './products';

const rootReducer = combineReducers({
  catalog: CatalogReducer,
  products: ProductsReducer,
});

export default rootReducer;