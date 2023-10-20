import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import * as planetsController from './controllers/planets'; // Import the controllers

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/api/planets', planetsController.getAll);
app.get('/api/planets/:id', planetsController.getOneById);
app.post('/api/planets', planetsController.create);
app.put('/api/planets/:id', planetsController.updateById);
app.delete('/api/planets/:id', planetsController.deleteById);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
