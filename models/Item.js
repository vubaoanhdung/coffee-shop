const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	calories: {
		type: Number,
		required: true,
	},
	imageSource: {
		type: String,
		required: true,
		unique: true,
	},
});

const Item = mongoose.model("items", ItemSchema);
module.exports = Item;
