import { Request, Response } from 'express';
import DragonSchema from '../schemas/Dragon';

class DragonController {
	async find(request: Request, response: Response) {
		try {
			const dragons = await DragonSchema.find();
			return response.json(dragons);
		} catch (error) {
			return response.status(500).send({
				error: 'Something wrong happened',
				message: error,
			});
		}
	}

	async create(request: Request, response: Response) {
		const {
			name,
			species,
			dragonClass,
			attack,
			speed,
			armor,
			firepower,
			shotLimit,
			venom,
			jawStrength,
			stealth,
			description,
			image,
			classImage,
		} = request.body;

		try {
			const dragonExists = await DragonSchema.findOne({ name });
			if (dragonExists) {
				return response
					.status(400)
					.json({ error: 'Oops!', message: 'Dragon already exists' });
			}
			const dragon = await DragonSchema.create({
				name,
				species,
				dragonClass,
				attack,
				speed,
				armor,
				firepower,
				shotLimit,
				venom,
				jawStrength,
				stealth,
				description,
				image,
				classImage,
			});
		} catch (error) {
			return response.status(500).send({
				error: 'registration failed',
				message: error,
			});
		}
	}
}

export default new DragonController();
