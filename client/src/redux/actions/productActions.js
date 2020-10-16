import axios from 'axios';
import { productTypes } from '../types/productTypes';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productTypes.productListRequest });
    const { data } = await axios.get('/api/products');

    dispatch({ type: productTypes.productListSuccess, payload: data });
  } catch (error) {
    dispatch({
      type: productTypes.productListFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: productTypes.productDetailsRequest });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: productTypes.productDetailsSuccess, payload: data });
  } catch (error) {
    dispatch({
      type: productTypes.productDetailsFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
