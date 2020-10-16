import { productTypes } from '../types/productTypes';

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productTypes.productListRequest:
      return {
        loading: true,
        products: [],
      };
    case productTypes.productListSuccess:
      return {
        loading: false,
        products: action.payload,
      };
    case productTypes.productListFailure:
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
    case productTypes.productDetailsRequest:
      return {
        loading: true,
        product: {},
      };
    case productTypes.productDetailsSuccess:
      return {
        loading: false,
        product: action.payload,
      };
    case productTypes.productDetailsFailure:
      return {
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
