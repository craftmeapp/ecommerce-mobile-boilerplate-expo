import { handleActions } from 'redux-actions';

import {
  READ_REGIONS_REQUEST,
  READ_REGIONS_FAILURE,
  READ_REGIONS_SUCCESS,
  SET_CURRENT_REGION,
} from '../../actions/regions/actionTypes';

const defaultState = {
  items: [],
  isAvailable: false,
  isRequest: false,
  isFailure: false,
  error: null,
  currentRegion: null,
};

const reducer = handleActions({
  [READ_REGIONS_SUCCESS]: (state, action) => (
    {
      ...state,
      items: action.payload.data.data,
      isAvailable: true,
      isRequest: false,
      isFailure: false,
      error: null,
    }
  ),
  [READ_REGIONS_FAILURE]: (state, action) => (
    {
      ...state,
      isAvailable: false,
      isRequest: false,
      isFailure: true,
      error: action.payload.error,
    }
  ),
  [READ_REGIONS_REQUEST]: state => (
    {
      ...state,
      isAvailable: false,
      isRequest: true,
      isFailure: false,
      error: null,
    }
  ),
  [SET_CURRENT_REGION]: (state, action) => (
    {
      ...state,
      currentRegion: action.payload.data,
    }
  ),
}, defaultState);

export default reducer;
