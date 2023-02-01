const express = require('express');
const router = express.Router();
const { Pokemon } = require('../db/models/index');

router.get('/', async (req, res) => {
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
})

module.exports = router;