import { actionTypes } from '../types/productTypes';

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.productListRequest:
      return {
        loading: true,
        products: [],
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
export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case actionTypes.productDetailsRequest:
      return {
        loading: true,
        product: {},
      };
    case actionTypes.productDetailsSuccess:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.productDetailsFailure:
      return {
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
