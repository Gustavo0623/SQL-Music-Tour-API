'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Meet_Greets', [{
        event_id: 1,
        band_id: 1,
        meet_start_time: '14:00:00',
        meet_end_time: '15:00:00',
        meet_greet_id: 1
    }, {
        event_id: 1,
        band_id: 1,
        meet_start_time: '16:00:00',
        meet_end_time: '17:00:00',
        meet_greet_id: 2
    }, {
        event_id: 1,
        band_id: 2,
        meet_start_time: '18:00:00',
        meet_end_time: '19:00:00',
        meet_greet_id: 3
    }, {
        event_id: 2,
        band_id: 1,
        meet_start_time: '20:00:00',
        meet_end_time: '21:00:00',
        meet_greet_id: 4
    }, {
        event_id: 3,
        band_id: 1,
        meet_start_time: '22:00:00',
        meet_end_time: '23:00:00',
        meet_greet_id: 5
    }, {
        event_id: 3,
        band_id: 2,
        meet_start_time: '10:00:00',
        meet_end_time: '11:00:00',
        meet_greet_id: 6
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the Meet_Greets table
    await queryInterface.bulkDelete('Meet_Greets', null, {})
  }
}
