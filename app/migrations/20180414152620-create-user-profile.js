'use strict';
const TABLE_NAME = 'user_profile';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(TABLE_NAME, {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          name: {
              allowNull: false,
              type: Sequelize.STRING
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable(TABLE_NAME);
  }
};
