const { Sequelize, sequelize } = require('../db');

const Show = sequelize.define('show', {
    title: Sequelize.STRING,
    rating: Sequelize.INTEGER
});

module.exports = Show;