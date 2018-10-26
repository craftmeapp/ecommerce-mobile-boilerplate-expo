import { createAction } from 'redux-actions';

import {
  READ_PRICES_REQUEST,
  READ_PRICES_FAILURE,
  READ_PRICES_SUCCESS,
} from './actionTypes';

import { recievePrices } from '../../services/api/Prices';

const onRecievePricesSuccess = ({ data }) => ({
  data,
});

const onRecievePricesFailure = ({ error }) => ({
  error,
});

const fetchPricesSuccess = createAction(READ_PRICES_SUCCESS, onRecievePricesSuccess);
const fetchPricesFailure = createAction(READ_PRICES_FAILURE, onRecievePricesFailure);
const fetchPricesRequest = createAction(READ_PRICES_REQUEST);

export const fetchPrices = ({ login }) =>
  (dispatch) => {
    dispatch(fetchPricesRequest());

    recievePrices({ login })
      .then(data => dispatch(fetchPricesSuccess({ data })))
      .catch(error => dispatch(fetchPricesFailure({ error })));
  };

