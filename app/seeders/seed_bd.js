'use strict';
const seedDb = require("./db_seed/seed");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return seedDb.seed(queryInterface);
    },

    down: (queryInterface, Sequelize) => {
        return seedDb.clean(queryInterface);
    }
};