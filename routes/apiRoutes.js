const axios = require("axios");
// const Yelp = require('yelpv3')
// package has built in search aka built-in axios(request)
const yelp = require('yelp-fusion');
const keys = require('../config/keys')

const apiKey = keys.yelpClientSecret;

module.exports = app => {
	
	app.get("/api/business", (req, res) => {

		console.log(req.query)

		const searchRequest = {
			term: 'Five Guys',
			location: 'redwood city, ca',
			limit: 5
		}

		const client = yelp.client(apiKey)

		const result = client.search(searchRequest).then(response => {
			// const firstResult = response.jsonBody.businesses[0, 2]
			const resultArr = response.jsonBody.businesses
			resultArr.map( result => {
				const prettyJson = JSON.stringify(result, null, 4)
				// console.log(prettyJson)
				console.log(result)
				res.send(result)
			})


			// const prettyJson = JSON.stringify(firstResult, null, 4)
			// console.log(prettyJson)
		}).catch( e => {
			console.log(e)
		});

		// res.send({result})
	});
	
}
