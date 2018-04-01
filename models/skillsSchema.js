const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillsSchema = new Schema ({
	_user: {type: Schema.Types.ObjectId, ref:'users'},
	currentSub: String,
	masterSkills: String,
	projects: String,
	role: String
});

mongoose.model('skills', skillsSchema)