import { Request, Response } from 'express';
import VikingSchema from '../schemas/Viking';

class VikingController {
	async find(request: Request, response: Response) {
		try {
			const vikings = await VikingSchema.find();
			return response.json(vikings);
		} catch (error) {
			return response.status(500).send({
				error: 'Something wrong happened',
				message: error,
			});
		}
	}

	async create(request: Request, response: Response) {
		const {
			firstName,
			lastName,
			tribe,
			gender,
			height,
			eyes,
			hair,
			weapon,
			location,
			image,
		} = request.body;

		try {
			const vikingExists = await VikingSchema.findOne({ firstName });
			if (vikingExists) {
				return response
					.status(400)
					.json({ error: 'Oops!', message: 'Viking already exists' });
			}
			const viking = await VikingSchema.create({
				firstName,
				lastName,
				tribe,
				gender,
				height,
				eyes,
				hair,
				weapon,
				location,
				image,
			});
		} catch (error) {
			return response.status(500).send({
				error: 'registration failed',
				message: error,
			});
		}
	}
}

export default new VikingController();
