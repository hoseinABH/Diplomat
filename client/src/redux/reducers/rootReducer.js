import { combineReducers } from 'redux';
import { productDetailReducer, productReducer } from './productReducers';
const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
});

export default rootReducer;
