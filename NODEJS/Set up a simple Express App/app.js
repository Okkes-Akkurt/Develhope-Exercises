import express, { json } from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';



const app = express();

config();

app.use(json());
app.use(morgan('dev'));

let planets = [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];

app.get('/planets', (req, res) => {
    res.json(planets);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
