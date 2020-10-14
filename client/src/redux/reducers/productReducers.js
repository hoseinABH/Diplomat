import { actionTypes } from '../types/productTypes';

const intialState = {
  products: [],
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.productListRequest:
      return {
        loading: true,
      };
    case actionTypes.productListSuccess:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.productListFailure:
      return {
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
