import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const PORT = 3000;

const app = express();

mongoose.connect('mongodb://localhost/httyd-db');

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
