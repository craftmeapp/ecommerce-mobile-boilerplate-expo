import { createAction } from 'redux-actions';

import {
  READ_PRODUCTS_REQUEST,
  READ_PRODUCTS_FAILURE,
  READ_PRODUCTS_SUCCESS,
} from './actionTypes';

import { recieveProducts } from '../../services/api/Products';

const onRecieveProductsSuccess = ({ data }) => ({
  data,
});

const onRecieveProductsFailure = ({ error }) => ({
  error,
});

const fetchProductsSuccess = createAction(READ_PRODUCTS_SUCCESS, onRecieveProductsSuccess);
const fetchProductsFailure = createAction(READ_PRODUCTS_FAILURE, onRecieveProductsFailure);
const fetchProductsRequest = createAction(READ_PRODUCTS_REQUEST);

export const fetchProducts = ({ login }) =>
  (dispatch) => {
    dispatch(fetchProductsRequest());

    recieveProducts({ login })
      .then(data => dispatch(fetchProductsSuccess({ data })))
      .catch(error => dispatch(fetchProductsFailure({ error })));
  };

