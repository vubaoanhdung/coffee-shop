import _ from "lodash";
import { FETCH_MENU } from "../actions/types";

const menuReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_MENU:
			return { ...state, ..._.mapKeys(action.payload, "_id") };
		default:
			return state;
	}
};
export default menuReducer;
