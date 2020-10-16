import { combineReducers } from 'redux';
import { cartReducers } from './cartReducers';
import { productDetailReducer, productReducer } from './productReducers';
const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducers,
});

export default rootReducer;
