const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database setup
const {db, setupDb} = require('./db');

setupDb()
    .then(() => {
        console.log('Database setup complete');
    })
    .catch((err) => {
        console.error('Error setting up the database:', err);
    });

// Routes
const {getAll, getOneById, create, updateById, deleteById} = require('./controllers/planets');

app.get('/planets', getAll);
app.get('/planets/:id', getOneById);
app.post('/planets', create);
app.put('/planets/:id', updateById);
app.delete('/planets/:id', deleteById);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
