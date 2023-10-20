
import { Request, Response } from 'express';


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

export const getAll = (req: Request, res: Response) => {
    res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
    const planet = planets.find((p) => p.id === parseInt(req.params.id));
    if (!planet) {
        return res.status(404).json({error: 'Planet not found'});
    }
    res.json(planet);
};

export const create = (req: Request, res: Response) => {
    const newPlanet = {
        id: req.body.id,
        name: req.body.name,
    };
    planets = [...planets, newPlanet];
    res.status(201).json({msg: 'Planet created successfully'});
};

export const updateById = (req: Request, res: Response) => {
    const planetIndex = planets.findIndex((p) => p.id === parseInt(req.params.id));
    if (planetIndex === -1) {
        return res.status(404).json({error: 'Planet not found'});
    }
    planets[planetIndex].name = req.body.name;
    res.json({msg: 'Planet updated successfully'});
};

export const deleteById = (req: Request, res: Response) => {
    const planetIndex = planets.findIndex((p) => p.id === parseInt(req.params.id));
    if (planetIndex === -1) {
        return res.status(404).json({error: 'Planet not found'});
    }
    planets = planets.filter((p) => p.id !== parseInt(req.params.id));
    res.json({msg: 'Planet deleted successfully'});
};
