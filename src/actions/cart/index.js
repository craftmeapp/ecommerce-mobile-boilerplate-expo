import { createAction } from 'redux-actions';

import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './actionTypes';

const onAddProductToCart = ({ id, amount }) => ({ id, amount });
const onRemoveProductFromCart = ({ id }) => ({ id });

export const addProductToCart = createAction(ADD_PRODUCT_TO_CART, onAddProductToCart);
export const removeProductFromCart = createAction(REMOVE_PRODUCT_FROM_CART, onRemoveProductFromCart);