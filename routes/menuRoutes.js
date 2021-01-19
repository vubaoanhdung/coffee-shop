const Item = require("../models/Item");
const menuRoutes = (app) => {
	app.get("/api/menu", async (req, res) => {
		const items = await Item.find({});
		res.send(items);
	});

	app.get("/api/menu/:id", async (req, res) => {
		const item = await Item.findById(req.params.id);
		res.send(item);
	});

	app.post("/api/menu", async (req, res) => {
		const data = req.body.data;
		const { name, calories, description, price } = data;
		const imageSource = data.image_source;
		const item = new Item({ name, calories, description, price, imageSource });
		await item.save();
		res.send(item);
	});

	app.patch("/api/menu/:id", async (req, res) => {
		const item = await Item.findByIdAndUpdate(
			req.params.id,
			req.body.updateData,
			{ new: true }
		);
		await item.save();
		res.send(item);
	});

	app.delete("/api/menu/:id", async (req, res) => {
		await Item.findByIdAndDelete(req.params.id);
		res.send();
	});
};

module.exports = menuRoutes;
