const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan('dev'));

const planetRouter = require('./planetRouter');
app.use('/', planetRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
