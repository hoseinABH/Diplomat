import { combineReducers } from 'redux';
import { cartReducers } from './cartReducers';
import { productDetailReducer, productReducer } from './productReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from './userReducers';
const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
