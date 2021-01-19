const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
	app.patch("/api/current_user/add_item", async (req, res) => {
		const item = req.body.item;
		const user = await User.findById(req.user.id);
		user.cart.push(item);
		await user.save();
		res.send(user);
	});

	app.patch("/api/current_user/remove_item", async (req, res) => {
		const itemIndex = req.body.itemIndex;
		const user = await User.findById(req.user.id);
		user.cart.splice(itemIndex, 1);
		await user.save();
		res.send(user);
	});
};
