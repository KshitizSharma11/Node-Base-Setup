'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [{
       modelNumber:'Airbus A320',
        capacity: 180,
       
         createdAt: new Date(),
         updatedAt: new Date()
       },{
        modelNumber:'Airbus A330 Neo',
         capacity: 220,
         createdAt: new Date(),
         updatedAt: new Date()
        },{
          modelNumber:'Airbus A380',
           capacity: 400,
           
         createdAt: new Date(),
         updatedAt: new Date()
          }], {});
  },

  async down (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
