import mongoose from 'mongoose';

const DragonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	species: {
		type: String,
		required: true,
	},
	dragonClass: {
		type: String,
		required: true,
	},
	attack: {
		type: String,
		required: true,
	},
	speed: {
		type: String,
		required: true,
	},
	armor: {
		type: String,
		required: true,
	},
	firepower: {
		type: String,
		required: false,
	},
	shotLimit: {
		type: String,
		required: false,
	},
	venom: {
		type: String,
		required: false,
	},
	jawStrength: {
		type: String,
		required: false,
	},
	stealth: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	classImage: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Dragon', DragonSchema);
