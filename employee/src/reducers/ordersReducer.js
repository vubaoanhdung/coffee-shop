import _ from "lodash";
import { FETCH_ORDERS, SERVE_ORDER } from "../actions/types";

const ordersReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_ORDERS:
			return { ...state, ..._.mapKeys(action.payload, "_id") };
		case SERVE_ORDER:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
export default ordersReducer;
