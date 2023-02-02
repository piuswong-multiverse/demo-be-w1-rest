const express = require('express');
const router = express.Router();
const { Dog } = require('../db/models/index');

// get all dogs OR get specific dogs queried
router.get('/', async (req, res) => {
    // if there are no query parameters, display all dogs
    if(Object.keys(req.query).length===0){
        const dogs = await Dog.findAll({});
        res.send(dogs);    
    } else {
        // if there ARE query params, send specific dogs
        const dogs = await Dog.findAll({
            where: {
                name: req.query.name
            }
        })
        res.send(dogs);
    }

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