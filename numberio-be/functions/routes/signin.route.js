const express = require('express');
const router = express.Router();
const {signinWithGoogle} = require('../services/signin.google.service');

router.post('/google',signinWithGoogle)
router.get('/demo', (req, res) => {
    console.log("Day la demo");
    return res.status(200).json({ message: "Okela" });
});

module.exports = router;