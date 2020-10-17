import { combineReducers } from 'redux';
import { cartReducers } from './cartReducers';
import { productDetailReducer, productReducer } from './productReducers';
import { userLoginReducer } from './userReducers';
const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
});

export default rootReducer;
