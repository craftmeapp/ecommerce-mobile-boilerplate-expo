import { handleActions } from 'redux-actions';

import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from '../../actions/cart/actionTypes';

const defaultState = {
  items: [],
};

const addProductToCart = ({ id, amount }, state) => {
  let isUpdate = false;

  const items = state.items.map(item => {
    if (item.id === id) {
      isUpdate = true;
      return { id, amount };
    }

    return { ...item };
  })

  if (isUpdate)
    return items;

  return items.concat({ id, amount });
}

const removeProductFromCart = ({ id }, state) => {
  return state.items.filter(item => item.id !== id);
}

const reducer = handleActions({
  [ADD_PRODUCT_TO_CART]: (state, action) => (
    {
      ...state,
      items: addProductToCart(action.payload, state),
    }
  ),
  [REMOVE_PRODUCT_FROM_CART]: (state, action) => (
    {
      ...state,
      items: removeProductFromCart(action.payload, state),
    }
  ),
}, defaultState);

export default reducer;
