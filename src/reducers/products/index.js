import { handleActions } from 'redux-actions';

import {
  READ_PRODUCTS_REQUEST,
  READ_PRODUCTS_FAILURE,
  READ_PRODUCTS_SUCCESS,
} from '../../actions/products/actionTypes';

const defaultState = {
  items: [],
  isAvailable: false,
  isRequest: false,
  isFailure: false,
  error: null,
};

const reducer = handleActions({
  [READ_PRODUCTS_SUCCESS]: (state, action) => (
    {
      ...state,
      items: action.payload.data.data,
      isAvailable: true,
      isRequest: false,
      isFailure: false,
    }
  ),
  [READ_PRODUCTS_FAILURE]: (state, action) => (
    {
      ...state,
      isAvailable: false,
      isRequest: false,
      isFailure: true,
      error: action.payload.error,
    }
  ),
  [READ_PRODUCTS_REQUEST]: state => (
    {
      ...state,
      isAvailable: false,
      isRequest: true,
      isFailure: false,
    }
  ),
}, defaultState);

export default reducer;
