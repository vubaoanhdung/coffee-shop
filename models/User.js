const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	googleId: {
		type: String,
	},
	cart: {
		type: Array,
	},
	history: {
		type: Array,
	},
});

userSchema.virtual("orders", {
	ref: "Order",
	localField: "_id",
	foreignField: "customer",
});
const User = mongoose.model("users", userSchema);
module.exports = User;
