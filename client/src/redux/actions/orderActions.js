import { orderTypes } from '../types/orderTypes';
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderTypes.orderCreateRequest,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({
      type: orderTypes.orderCreateSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: orderTypes.orderCreateFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
