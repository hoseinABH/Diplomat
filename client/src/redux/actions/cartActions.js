import axios from 'axios';
import { cartTypes } from '../types/cartTypes';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: cartTypes.cartAddItem,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartTypes.cartRemoveItem,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: cartTypes.cartSaveShippingAddress,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: cartTypes.cartSavePaymentMethod,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
