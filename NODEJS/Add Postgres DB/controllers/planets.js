// controllers/planets.js

const {db} = require('../db');

const getAll = async (req, res) => {
    try {
        const planets = await db.any('SELECT * FROM planets');
        res.json(planets);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while fetching planets.'});
    }
};

const getOneById = async (req, res) => {
    const id = req.params.id;
    try {
        const planet = await db.oneOrNone('SELECT * FROM planets WHERE id = $1', id);
        if (planet) {
            res.json(planet);
        } else {
            res.status(404).json({error: 'Planet not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while fetching the planet.'});
    }
};

const create = async (req, res) => {
    const {name} = req.body;
    try {
        await db.none('INSERT INTO planets (name) VALUES ($1)', name);
        res.status(201).json({msg: 'Planet created successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while creating the planet.'});
    }
};

const updateById = async (req, res) => {
    const id = req.params.id;
    const {name} = req.body;
    try {
        const result = await db.result('UPDATE planets SET name = $1 WHERE id = $2', [name, id]);
        if (result.rowCount === 1) {
            res.json({msg: 'Planet updated successfully'});
        } else {
            res.status(404).json({error: 'Planet not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while updating the planet.'});
    }
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.result('DELETE FROM planets WHERE id = $1', id);
        if (result.rowCount === 1) {
            res.json({msg: 'Planet deleted successfully'});
        } else {
            res.status(404).json({error: 'Planet not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while deleting the planet.'});
    }
};

module.exports = {getAll, getOneById, create, updateById, deleteById};
