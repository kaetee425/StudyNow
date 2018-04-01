const mongoose = require("mongoose")
const Skills = mongoose.model("skills")
const bodyParser = require('body-parser')
const isAuth = require('../middleware/isAuth')

module.exports= app => {

	app.use(bodyParser.urlendcoded({extended: true}));
	app.use(bodyParser.json())

	app.get("/api/skills", (req, res) => {
		Skills.find({})
			.exec((err, skill) => {
				if (err || (!skill)) {
					return res.status(404).send({message: "skills not found!"})
				}

			res.send(skill)
		})
	})

	app.post("/api/skills", isAuth, (req, res) => {
		const newSkills = new Skills()
		//create instance of a class

		newSkills._user = req.user.id;
		newSkills.currentSub = req.body.currentSub;
		newSkills.masterSkills = req.body.masterSkills;
		newSkills.projects = req.body.projects;
		newSkills.role = req.body.role

		Skills.save((err, skill) => {
			if (err) {
				res.send(err)
			}

			res.json({message: "skills saved!"})
		})
	})
}