const axios = require ("axios")
const bodyParser = require('body-parser')
const keys = require('../config/keys')
const Yelp = require('yelp-fusion')

// module.exports = app => {

// 	app.get('/api/business', (req, res) => {
// 		console.log("this is running")
// 		// axios.get("https://api.yelp.com/v3/businesses/search")
// 		// 	.then(response => {
// 		// 		console.log("yelp search: ", response)
// 		// 	}).catch(err => console.error(err))
	
// 		const url = "https://api.yelp.com/v3/businesses/search"

// 		const options = {
// 			method: 'GET',
// 			headers: {app_id: keys.yelpClientID, app_secret: keys.yelpClientSecrete},
// 			url: url
// 		};

// 		axios(options)
// 	})

// }

//Authentication: Bearer <API_KEY> <-- from yelp itself

// method: 'GET',
//     url: 'yelpURL',
//     headers: {
//         'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },

// var config = {
  // headers: {Authorization: <KEY>}
// };
// axios.get(url, config) 

// {
// 	"access_token": "iSl",
// 	"expires_in": 640100460,
// 	"token_type": "Bearer"
// }



module.exports = app => {

}