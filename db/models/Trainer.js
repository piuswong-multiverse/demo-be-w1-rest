const { Sequelize, sequelize } = require('../db');

const Trainer = sequelize.define('trainer', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Trainer;