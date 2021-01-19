const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = require("../models/User");

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientId,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			// check if the user already existed
			const existingUser = await User.findOne({ googleId: profile.id });

			// if there is a user with the exact googleId
			if (existingUser) {
				done(null, existingUser);
			} else {
				// if not, create a new one
				const newUser = await new User({ googleId: profile.id }).save();
				done(null, newUser);
			}
		}
	)
);
