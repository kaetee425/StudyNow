const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillsSchema = new Schema ({
	_user: {type: Schema.Types.ObjectId, ref:'users'},
	currentSub: {type: String, required: true},
	masterSkills: {type: String, required: true},
	projects: {type: String, required: true},
	role: {type: String, required: true}
});

mongoose.model('skills', skillsSchema)