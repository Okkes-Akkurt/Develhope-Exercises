const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

// Import your database connection (e.g., db)

// User Signup Route
router.post('/signup', async (req, res) => {
    try {
        const {username, password} = req.body;

        // Check if the username already exists in the database
        const existingUser = await db.oneOrNone(
            'SELECT * FROM users WHERE username = $1',
            username
        );
        if (existingUser) {
            return res
                .status(400)
                .json({error: 'Username already exists. Choose a different username.'});
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user into the database
        await db.none('INSERT INTO users (username, password) VALUES ($1, $2)', [
            username,
            hashedPassword,
        ]);

        res.json({msg: 'Signup successful. Now you can log in.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred during signup.'});
    }
});

// User Login Route
router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;

        // Retrieve the user from the database based on the provided username
        const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', username);

        if (!user) {
            return res.status(401).json({error: 'Username or password is incorrect.'});
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({error: 'Username or password is incorrect.'});
        }

        // Create a JWT token with user information
        const token = jwt.sign({id: user.id, username: user.username}, secret);

        res.json({token, id: user.id, username: user.username});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred during login.'});
    }
});

module.exports = router;
