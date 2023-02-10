'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [{
        event_id: 1,
        name: 'Rock Concert',
        date: '2023-03-01',
        start_time: '19:00:00',
        end_time: '23:00:00'
    }, {
        event_id: 2,
        name: 'Jazz Festival',
        date: '2023-04-05',
        start_time: '18:00:00',
        end_time: '22:00:00'
    }, {
        event_id: 3,
        name: 'Blues Festival',
        date: '2023-05-15',
        start_time: '17:00:00',
        end_time: '21:00:00'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the Events table
    await queryInterface.bulkDelete('Events', null, {})
  }
}
