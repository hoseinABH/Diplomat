import { combineReducers } from 'redux';
import { cartReducers } from './cartReducers';
import { productDetailReducer, productReducer } from './productReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  updateProfileReducer,
} from './userReducers';
import { orderCreateReducer } from './orderReducers';

const rootReducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updateProfile: updateProfileReducer,
  orderCreate: orderCreateReducer,
});

export default rootReducer;
