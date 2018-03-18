const axios = require("axios");
const router = require("express").Router();

router.get("/businesses", (req, res) => {
	axios
		.get("https://api.yelp.com/v3/businesses/search", {params: req.query })
		.then(({ data: { results } }) => res.json(results))
		.catch(err => res.status(422).json (err));
});

modeul.exports = router;