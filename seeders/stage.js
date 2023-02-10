'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Stages', [{
            stage_id: 1,
            stage_name: 'Main Stage'
        }, {
            stage_id: 2,
            stage_name: 'Secondary Stage'
        }, {
            stage_id: 3,
            stage_name: 'Tertiary Stage'
        }, {
            stage_id: 4,
            stage_name: 'Quaternary Stage'
        }, {
            stage_id: 5,
            stage_name: 'Quinary Stage'
        }, {
            stage_id: 6,
            stage_name: 'Senary Stage'
        }])
    },
  
    down: async (queryInterface, Sequelize) => {
        // note that this deletes ALL data from the Stages table
        await queryInterface.bulkDelete('Stages', null, {})
    }
};
  