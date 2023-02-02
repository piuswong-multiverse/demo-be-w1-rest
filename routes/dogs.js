const express = require('express');
const router = express.Router();
const { Dog } = require('../db/models/index');

router.get('/', async (req, res) => {

    const dogs = await Dog.findAll({})
    res.send(dogs);

})

router.delete('/:id', async (req, res) => {
//    const dog = await Dog.findByPk(req.params.id);
    await Dog.destroy({
        where: {
            id: req.params.id
        }
    });
    const dogs = await Dog.findAll({});
    res.send(dogs);
})

router.post('/', async (req, res) => {
    await Dog.create(
        req.body
    );
    const dogs = await Dog.findAll({});
    res.send(dogs);
})

module.exports = router;