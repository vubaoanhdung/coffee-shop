import { combineReducers } from "redux";

import menuReducer from "./menuReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
	menu: menuReducer,
	orders: ordersReducer,
});
