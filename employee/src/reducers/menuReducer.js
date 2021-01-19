import _ from "lodash";
import {
	EDIT_ITEM,
	FETCH_MENU,
	FETCH_ITEM,
	DELETE_ITEM,
} from "../actions/types";

const menuReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_MENU:
			return { ...state, ..._.mapKeys(action.payload, "_id") };
		case EDIT_ITEM:
			return { ...state, [action.payload._id]: action.payload };
		case FETCH_ITEM:
			return { ...state, [action.payload._id]: action.payload };

		// DELETE_ITEM: action.payload is the id of the item
		case DELETE_ITEM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
export default menuReducer;
