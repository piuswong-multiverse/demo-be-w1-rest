const { Sequelize, sequelize } = require('../db');

const Dog = sequelize.define('dog', {
    name: Sequelize.STRING,
    breed: Sequelize.STRING,
    color: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = Dog;