const Order = require("../models/Order");
const User = require("../models/User");
module.exports = (app) => {
	app.get("/api/orders", async (req, res) => {
		const orders = await Order.find({});
		res.send(orders);
	});

	app.delete("/api/orders/:orderId", async (req, res) => {
		const orderId = req.params.orderId;
		const customerId = req.body.customerId;

		// delete order inside orders collection
		const order = await Order.findByIdAndDelete(orderId);

		// find the user
		// then modify the history array of the user
		const user = await User.findById(customerId);
		const userHistory = user.history;
		const updateUserHistory = userHistory.map((item) => {
			if (item._id.toString() === orderId) {
				item.ready = true;
				return item;
			}
			return item;
		});
		const updateUser = await User.findByIdAndUpdate(customerId, {
			history: updateUserHistory,
		});
		await updateUser.save();
		res.send(order);
	});
};
