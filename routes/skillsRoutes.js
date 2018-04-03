const mongoose = require("mongoose")
const Skills = mongoose.model("skills")
const bodyParser = require('body-parser')
const isAuth = require('../middleware/isAuth')

module.exports= app => {

	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())

	app.get("/api/skills", (req, res) => {
		console.log("we're in get")
		Skills.find({})
			.exec((err, skill) => {
				if (err || (!skill)) {
					return res.status(404).send({message: "skills not found!"})
				}

			res.send(skill)
		})
	})

	console.log("hello fromskillsourts ")

	app.post("/api/skills", (req, res) => {
		console.log("about to create skills")
		const newSkills = new Skills()
		//create instance of a class
		console.log(req.user)

		// newSkills._user = req.user.id;
		newSkills.currentSub = req.body.currentSub;
		newSkills.masterSkills = req.body.masterSkills;
		newSkills.projects = req.body.projects;
		newSkills.role = req.body.role

		newSkills.save((err, skill) => {
			if (err) {
				console.log(err)
				res.send(err)
			}

			res.json({message: "skills saved!"})
		})
	})
}
