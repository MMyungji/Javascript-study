'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      
      // room의 입장에선 user은 N:1
      models.room.belongsTo(models.user,{foreignKey:"user_id"});

      // 1:N (room:room_image)
      models.room.hasMany(models["room_image"],{foreignKey:"room_id"});
      // 1:N (room:room_option)
      models.room.hasMany(models["room_option"],{foreignKey:"room_id"});

    }
  };
  room.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    room_type: DataTypes.STRING,
    room_size: DataTypes.STRING,
    location: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'room',
    paranoid: true
  });
  return room;
};