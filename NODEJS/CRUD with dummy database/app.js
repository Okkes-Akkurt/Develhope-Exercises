import { Router } from 'express';
const router = Router();
import { object, number, string } from 'joi';

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

const planetSchema = object({
    id: number().required(),
    name: string().required(),
});

function validatePlanet(req, res, next) {
    const {error} = planetSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message});
    }
    next();
}

router.get('/planets', (req, res) => {
    res.json(planets);
});

router.get('/planets/:id', (req, res) => {
    const planet = planets.find((p) => p.id === parseInt(req.params.id));
    if (!planet) {
        return res.status(404).json({error: 'Planet not found'});
    }
    res.json(planet);
});

router.post('/planets', validatePlanet, (req, res) => {
    const newPlanet = {
        id: req.body.id,
        name: req.body.name,
    };
    planets.push(newPlanet);
    res.status(201).json({msg: 'Planet created successfully'});
});

router.put('/planets/:id', validatePlanet, (req, res) => {
    const planet = planets.find((p) => p.id === parseInt(req.params.id));
    if (!planet) {
        return res.status(404).json({error: 'Planet not found'});
    }
    planet.name = req.body.name;
    res.json({msg: 'Planet updated successfully'});
});

router.delete('/planets/:id', (req, res) => {
    const planetIndex = planets.findIndex((p) => p.id === parseInt(req.params.id));
    if (planetIndex === -1) {
        return res.status(404).json({error: 'Planet not found'});
    }
    planets.splice(planetIndex, 1);
    res.json({msg: 'Planet deleted successfully'});
});

export default router;
