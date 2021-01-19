import axios from "axios";
import history from "../history";

import {
	ADD_ITEM_TO_CART,
	FETCH_USER,
	FETCH_MENU,
	REMOVE_ITEM_FROM_CART,
} from "./types";

export const addItemToCart = (item) =>
	async function (dispatch) {
		const response = await axios.patch("/api/current_user/add_item", { item });
		dispatch({ type: ADD_ITEM_TO_CART, payload: response.data });
	};

export const removeItemFromCart = (itemIndex) =>
	async function (dispatch) {
		const response = await axios.patch("/api/current_user/remove_item", {
			itemIndex,
		});
		dispatch({ type: REMOVE_ITEM_FROM_CART, payload: response.data });
	};

export const fetchUser = () =>
	async function (dispatch) {
		const response = await axios.get("/api/current_user");
		dispatch({ type: FETCH_USER, payload: response.data });
	};

export const fetchMenu = () =>
	async function (dispatch) {
		const response = await axios.get("/api/menu");
		dispatch({ type: FETCH_MENU, payload: response.data });
	};

export const handlePaymentToken = (token) =>
	async function (dispatch) {
		const response = await axios.post("/api/stripe", token);
		dispatch({ type: FETCH_USER, payload: response.data });
		history.push("/history");
	};
