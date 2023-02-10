'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // Band
      Set_Time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // Event
      Set_Time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // Stage
      Set_Time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  Set_Time.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    Set_Time_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'Set_Times',
  });
  return Set_Time;
};