import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import orderReducer from "./order.reducers";
import userReducer from "./user.reducers";
import productReducer from "./product.reducers";

export default combineReducers({
  auth: authReducer,
  order: orderReducer,
  product: productReducer,
  user: userReducer,
});
