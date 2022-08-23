import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

const VikingSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: false,
	},
	tribe: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	height: {
		type: String,
		required: true,
	},
	eyes: {
		type: String,
		required: true,
	},
	hair: {
		type: String,
		required: true,
	},
	weapon: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// VikingSchema.pre('save', async function (next) {
// 	const hashedPassword = await bcrypt.hash(this.password, 12);
// 	this.password = hashedPassword;
// });

export default mongoose.model('Viking', VikingSchema);
