const axios = require("axios");
// const Yelp = require('yelpv3')
// package has built in search aka built-in axios(request)
const yelp = require('yelp-fusion');
const keys = require('../config/keys')

const apiKey = keys.yelpClientSecret;

module.exports = app => {
	
	app.get("/api/business", (req, res) => {

		console.log('req.query.q: ', req.query.q)
		console.log('========================')
		console.log('type of: ', typeof req.query.q)
		console.log('========================')
		const queryJSON = JSON.parse(req.query.q)

		const searchRequest = {
			term: queryJSON.term,
			location: queryJSON.location,
			limit: 5
		}

		const client = yelp.client(apiKey)

		const result = client.search(searchRequest).then(response => {
			// const firstResult = response.jsonBody.businesses[0, 2]
			const resultArr = response.jsonBody.businesses
			// resultArr.map( result => {
			// 	const prettyJson = JSON.stringify(result, null, 4)
			// 	// console.log(prettyJson)
			// 	console.log(result)
			// })
			console.log('result outside of the')
				res.send(resultArr)


			// const prettyJson = JSON.stringify(firstResult, null, 4)
			// console.log(prettyJson)
		}).catch( e => {
			console.log(e)
		});

		// res.send({result})
	});
	
}
