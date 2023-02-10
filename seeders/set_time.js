'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Set_Times', [{
          event_id: 1,
          stage_id: 1,
          band_id: 1,
          start_time: '2023-03-01 10:00:00',
          end_time: '2023-03-01 11:00:00',
          Set_Time_Id: 1
      }, {
          event_id: 1,
          stage_id: 1,
          band_id: 2,
          start_time: '2023-03-01 11:30:00',
          end_time: '2023-03-01 12:30:00',
          Set_Time_Id: 2
      }, {
          event_id: 2,
          stage_id: 2,
          band_id: 1,
          start_time: '2023-03-02 13:00:00',
          end_time: '2023-03-02 14:00:00',
          Set_Time_Id: 3
      }, {
          event_id: 2,
          stage_id: 2,
          band_id: 2,
          start_time: '2023-03-02 14:30:00',
          end_time: '2023-03-02 15:30:00',
          Set_Time_Id: 4
      }, {
          event_id: 3,
          stage_id: 1,
          band_id: 1,
          start_time: '2023-03-03 16:00:00',
          end_time: '2023-03-03 17:00:00',
          Set_Time_Id: 5
      }, {
          event_id: 3,
          stage_id: 2,
          band_id: 2,
          start_time: '2023-03-03 17:30:00',
          end_time: '2023-03-03 18:30:00',
          Set_Time_Id: 6
      }])
    },
  
    down: async (queryInterface, Sequelize) => {
      // note that this deletes ALL data from the Set_Times table
      await queryInterface.bulkDelete('Set_Times', null, {})
    }
};
  