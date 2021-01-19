const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const updateRoutes = require("./routes/updateRoutes");
const menuRoutes = require("./routes/menuRoutes");
const billingRoutes = require("./routes/billingRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const app = express();

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days in milliseconds
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);
updateRoutes(app);
menuRoutes(app);
billingRoutes(app);
ordersRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Up and Running on port", PORT);
});
