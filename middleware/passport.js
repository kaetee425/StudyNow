'use strict'

const { Strategy: LocalStrategy } = require('passport-local')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')
const authRoutes = require('../routes/authRoutes')

const User = mongoose.model('users')

module.exports = function(passport) {
	passport.use(
		new GoogleStrategy ({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("accessToken: ", accessToken)
			console.log("refreshToken: ", refreshToken)
			console.log("profile: ", profile)

			User.findOne({ googleId: profile.id })
				.then((existingUser) => {
					console.log('existing person: ', existingUser)
					if (existingUser) {
						done(null, existingUser)
					} else {
						new User({ googleId: profile.id })
							.save()
							.then(user => done(null, user))
					}
				}).catch(err => console.error("Google Auth Error: ", err))
		})
	)

	passport.serializeUser( (user, done) => {
		done(null, user.id)
	});

	passport.deserializeUser( (id, done) => {
		User.findById(id)
			.then(user => {
				done(null, user)
			})
	});
};

