const express = require('express');
const router = express.Router();
const { Trainer } = require('../db/models/index');

router.get('/', async (req, res) => {
    const trainers = await Trainer.findAll();
    res.json(trainers);
})

module.exports = router;