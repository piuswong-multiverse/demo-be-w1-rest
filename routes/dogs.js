const express = require('express');
const router = express.Router();
const { Dog } = require('../db/models/index');

router.get('/', async (req, res, ) => {

    const dogs = await Dog.findAll({})
    res.send(dogs);

})

module.exports = router;