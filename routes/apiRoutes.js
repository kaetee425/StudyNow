const axios = require("axios");
// const Yelp = require('yelpv3')
// package has built in search aka built-in axios(request)
const yelp = require('yelp-fusion');
const keys = require('../config/keys')

const apiKey = keys.yelpClientSecret;

module.exports = app => {
	
	app.get("/api/business", (req, res) => {

		const queryJSON = JSON.parse(req.query.q)

		const searchRequest = {
			term: queryJSON.term,
			location: queryJSON.location,
			limit: 5
		}

		const client = yelp.client(apiKey)

		client.search(searchRequest).then(response => {
			// console.log("response", response)
			// console.log("search term:", searchRequest.term)
			
			const resultArr = response.jsonBody.businesses
			
			console.log('result outside of the')
				res.send(resultArr)
		}).catch( e => {
			console.log(e)
		});
	});



	app.get("/api/business/:bizID/review", (req, res) => {
		console.log(req.params.bizID)

		const bizID = req.params.bizID

		const client = yelp.client(apiKey)

			client.reviews(bizID).then(response => {
				const bizReview = response.jsonBody.reviews
				res.send(bizReview)
			}).catch( e => {
				console.log(e)
			})
	});
}
