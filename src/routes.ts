import { Router } from 'express';
import VikingController from './database/controller/VikingController';
import DragonController from './database/controller/DragonController';

const routes = Router();

// routes.post('/viking', VikingController.create);
routes.get('/vikings', VikingController.find);

// routes.post('/dragon', DragonController.create);
routes.get('/dragons', DragonController.find);

export default routes;
