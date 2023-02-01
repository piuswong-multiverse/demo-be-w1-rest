const { Sequelize, sequelize } = require('../db');

const Pokemon = sequelize.define('pokemon', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Pokemon;