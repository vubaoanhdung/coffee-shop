import axios from "axios";

import history from "../history";

import {
	FETCH_ORDERS,
	FETCH_MENU,
	FETCH_ITEM,
	EDIT_ITEM,
	SERVE_ORDER,
	DELETE_ITEM,
	CREATE_ITEM,
} from "./types";

export const fetchMenu = () => async (dispatch) => {
	const response = await axios.get("/api/menu");
	dispatch({ type: FETCH_MENU, payload: response.data });
};

export const fetchOrders = () => async (dispatch) => {
	const response = await axios.get("/api/orders");
	dispatch({ type: FETCH_ORDERS, payload: response.data });
};

export const editItem = (itemId, updateData) => async (dispatch) => {
	const response = await axios.patch(`/api/menu/${itemId}`, { updateData });
	dispatch({ type: EDIT_ITEM, payload: response.data });
	history.push("/menu");
};

export const createItem = (data) => async (dispatch) => {
	const response = await axios.post(`/api/menu`, { data });
	dispatch({ type: CREATE_ITEM, payload: response.data });
	history.push("/menu");
};
export const deleteItem = (itemId) => async (dispatch) => {
	await axios.delete(`/api/menu/${itemId}`);
	dispatch({ type: DELETE_ITEM, payload: itemId });
	history.push("/menu");
};

export const fetchItem = (itemId) => async (dispatch) => {
	const response = await axios.get(`/api/menu/${itemId}`);
	dispatch({ type: FETCH_ITEM, payload: response.data });
};

export const serveOrder = (orderId, customerId) => async (dispatch) => {
	await axios.delete(`/api/orders/${orderId}`, {
		data: {
			customerId,
		},
	});
	dispatch({ type: SERVE_ORDER, payload: orderId });
};
