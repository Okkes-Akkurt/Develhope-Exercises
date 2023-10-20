const express = require('express');
const router = express.Router();
const passport = require('../passport-config');

router.post('/register', (req, res) => {
});

router.post('/login', (req, res) => {
});

router.get('/protected', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({message: 'You have access to this protected route.'});
});

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({username}, secret, {expiresIn: '1h'});
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

});


module.exports = router;