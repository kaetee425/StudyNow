const axios = require ("axios")
const bodyParser = require('body-parser')
const keys = require('../config/keys')
const Yelp = require('yelp')

module.exports = app => {

	// app.get('/api/business', (req, res) => {
	// 	console.log("this is running")
	// 	// axios.get("https://api.yelp.com/v3/businesses/search")
	// 	// 	.then(response => {
	// 	// 		console.log("yelp search: ", response)
	// 	// 	}).catch(err => console.error(err))
	
	// 	const url = "https://api.yelp.com/v3/businesses/search"

	// 	const options = {
	// 		method: 'GET',
	// 		headers: {app_id: keys.yelpClientID, app_secret: keys.yelpClientSecrete},
	// 		url: url
	// 	};

	// 	axios(options)

	// })

	const yelp = new Yelp({
		consumer_key: keys.yelpClientID,
		consumer_secret: keys.yelpClientSecrete,
	});

	yelp.search({ term: 'food', location: 'Montreal' })
		.then(function (data) {
			console.log(data)
		}).catch(function (err) {
			console.errer(err)
		})

}

//Authentication: Bearer <API_KEY> <-- from yelp itself