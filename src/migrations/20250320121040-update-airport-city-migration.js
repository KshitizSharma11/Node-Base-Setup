'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     *await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('airports',{
      type: 'FOREIGN KEY',
      fields: ['cityId'],
      name:'city-frn-key',
      references: {
        table: 'Cities',
        field: 'id',
      },
      onDelete: 'CASCADE',
      
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('airports','city-frn-key')
  }
};
