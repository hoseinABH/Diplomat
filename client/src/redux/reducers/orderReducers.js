import { orderTypes } from '../types/orderTypes';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case orderTypes.orderCreateRequest:
      return { loading: true };

    case orderTypes.orderCreateSuccess:
      return { loading: false, success: true, order: action.payload };

    case orderTypes.orderCreateFailure:
      return { loading: false, errors: action.payload };
    case orderTypes.orderListReset:
      return { order: {} };

    default:
      return state;
  }
};
export const orderDetailsReducer = (
  state = { orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case orderTypes.orderDetailsRequest:
      return { ...state, loading: true };

    case orderTypes.orderDetailsSuccess:
      return { loading: false, order: action.payload };

    case orderTypes.orderDetailsFailure:
      return { loading: false, errors: action.payload };

    default:
      return state;
  }
};
