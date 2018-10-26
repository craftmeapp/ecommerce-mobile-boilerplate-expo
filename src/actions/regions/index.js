import { createAction } from 'redux-actions';

import {
  READ_REGIONS_REQUEST,
  READ_REGIONS_FAILURE,
  READ_REGIONS_SUCCESS,
  SET_CURRENT_REGION,
} from './actionTypes';

import { recieveRegions } from '../../services/api/Regions';

const onRecieveRegionsSuccess = ({ data }) => ({
  data,
});

const onRecieveRegionsFailure = ({ error }) => ({
  error,
});

const fetchRegionsSuccess = createAction(READ_REGIONS_SUCCESS, onRecieveRegionsSuccess);
const fetchRegionsFailure = createAction(READ_REGIONS_FAILURE, onRecieveRegionsFailure);
const fetchRegionsRequest = createAction(READ_REGIONS_REQUEST);

export const fetchRegions = ({ login }) =>
  (dispatch) => {
    dispatch(fetchRegionsRequest());

    recieveRegions({ login })
      .then(data => dispatch(fetchRegionsSuccess({ data })))
      .catch(error => dispatch(fetchRegionsFailure({ error })));
  };

export const setCurrentRegion = createAction(SET_CURRENT_REGION, ({ data }) => ({ data }));
