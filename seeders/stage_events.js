'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Stage_Events', [{
          stage_events_id: 1,
          stage_id: 1,
          event_id: 1
      }, {
          stage_events_id: 2,
          stage_id: 2,
          event_id: 1
      }, {
          stage_events_id: 3,
          stage_id: 3,
          event_id: 1
      }, {
          stage_events_id: 4,
          stage_id: 1,
          event_id: 2
      }, {
          stage_events_id: 5,
          stage_id: 2,
          event_id: 2
      }, {
          stage_events_id: 6,
          stage_id: 3,
          event_id: 3
      }])
    },
  
    down: async (queryInterface, Sequelize) => {
      // note that this deletes ALL data from the Stage_Events table
      await queryInterface.bulkDelete('Stage_Events', null, {})
    }
}
  