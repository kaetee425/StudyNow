'use strict'

module.exports = function isAuthenticated(req, res, next) {
	if (req.user) {
		return next()
	}

	return res.status(404).send({})
}