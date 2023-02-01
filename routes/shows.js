const express = require('express');
const router = express.Router();
const { Show } = require('../db/models/index');

router.get('/', async (req,res) => {
    const shows = await Show.findAll();
    res.json(shows);
})

module.exports = router;