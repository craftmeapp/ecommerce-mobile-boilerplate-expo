import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = [
  thunk,
];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );

  return store;
}
