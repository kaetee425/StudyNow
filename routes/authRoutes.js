const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const isAuthenticated = require('../middleware/isAuth')

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/')
	});

	app.put('/api/users/', function(req, res) {
		console.log("put request working")
		console.log("red.user.id", req.user._id)
		User.findById(req.user._id, function(err, user) {
			console.log("im finding")
			if (err)
				res.send(err);
			console.log("this is req.body: ", req.body);

			user.save(function (err) {
				if (err)
					res.send(err);
				res.json({ message: 'user was updated' })
			});
		});
	});
};