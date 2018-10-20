import { handleActions } from 'redux-actions';

import {
  READ_PRICES_REQUEST,
  READ_PRICES_FAILURE,
  READ_PRICES_SUCCESS,
} from '../../actions/prices/actionTypes';

const defaultState = {
  items: [],
  isAvailable: false,
  isRequest: false,
  isFailure: false,
  error: null,
};

const reducer = handleActions({
  [READ_PRICES_SUCCESS]: (state, action) => (
    {
      ...state,
      items: action.payload.data.data,
      isAvailable: true,
      isRequest: false,
      isFailure: false,
      error: null,
    }
  ),
  [READ_PRICES_FAILURE]: (state, action) => (
    {
      ...state,
      isAvailable: false,
      isRequest: false,
      isFailure: true,
      error: action.payload.error,
    }
  ),
  [READ_PRICES_REQUEST]: state => (
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
