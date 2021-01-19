import {
	FETCH_USER,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
} from "../actions/types";
const userReducer = (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		case ADD_ITEM_TO_CART:
			return action.payload;
		case REMOVE_ITEM_FROM_CART:
			return action.payload;
		default:
			return state;
	}
};
export default userReducer;
