'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dinos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      power: {
        type: Sequelize.INTEGER
      },
      agility: {
        type: Sequelize.INTEGER
      },
      intellect: {
        type: Sequelize.INTEGER
      },
      stamina: {
        type: Sequelize.INTEGER
      },
      magic: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dinos');
  }
};