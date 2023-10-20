const express = require('express');
const router = express.Router();
const multer = require('multer');
const authorize = require('../authorize');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
});
router.get('/protected', authorize, (req, res) => {
    res.json({message: 'You have access to this protected route.'});
});

const upload = multer({storage});

router.post('/upload', authorize, upload.single('image'), (req, res) => {
});

module.exports = router;
