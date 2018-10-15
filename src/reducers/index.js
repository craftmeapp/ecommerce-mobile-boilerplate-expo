import { combineReducers } from 'redux';
import CatalogReducer from './catalog';

const rootReducer = combineReducers({
  catalog: CatalogReducer,
});

export default rootReducer;