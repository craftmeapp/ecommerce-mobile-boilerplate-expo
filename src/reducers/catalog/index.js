import { handleActions } from 'redux-actions';

import {
  READ_CATALOG_REQUEST,
  READ_CATALOG_FAILURE,
  READ_CATALOG_SUCCESS,
} from '../../actions/catalog/actionTypes';

const defaultState = {
  items: [],
  isAvailable: false,
  isRequest: false,
  isFailure: false,
  error: null,
};

const reducer = handleActions({
  [READ_CATALOG_SUCCESS]: (state, action) => (
    {
      ...state,
      items: action.payload.data.data,
      isAvailable: true,
      isRequest: false,
      isFailure: false,
      error: null,
    }
  ),
  [READ_CATALOG_FAILURE]: (state, action) => (
    {
      ...state,
      isAvailable: false,
      isRequest: false,
      isFailure: true,
      error: action.payload.error,
    }
  ),
  [READ_CATALOG_REQUEST]: state => (
    {
      ...state,
      isAvailable: false,
      isRequest: true,
      isFailure: false,
      error: null,
    }
  ),
}, defaultState);

export default reducer;
