'use strict'

module.exports = function isAuthenticated(req, res, next) {
	if (req.user) {
		return next()
	}

	return res.status(401).send({})
	// 401 = error for non authorized user
}