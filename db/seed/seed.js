const { sequelize } = require('../db');
const { Show, Dog, Pokemon, Trainer } = require('../models/index');
const { dogs, shows, pokemon, trainers } = require('./seedData');

const seed = async () => {
    await sequelize.sync({force: true});
    await Show.bulkCreate(shows);
    await Dog.bulkCreate(dogs);
    await Pokemon.bulkCreate(pokemon);
    await Trainer.bulkCreate(trainers);
};

// Populate database with starting data and handle errors
const seedAndCheck = () => {
    seed().then(() => {
        console.log('Seeding successful! Check it out.');
    }).catch(
        err => {
            console.error(err);
        }
    );
    // .finally( () => {
    //     sequelize.close();
    // });
}

module.exports = {
    seed,
    seedAndCheck
}