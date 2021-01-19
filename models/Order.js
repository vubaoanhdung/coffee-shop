const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	// item
	name: {
		type: String,
		required: true,
	},
	ready: {
		type: Boolean,
		required: true,
	},
	imageSource: {
		type: String,
		required: true,
	},
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
