import { combineReducers } from 'redux';
import { productReducer } from './productReducers';
const rootReducer = combineReducers({
  productList: productReducer,
});

export default rootReducer;
