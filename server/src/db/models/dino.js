'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dino.init({
    name: DataTypes.STRING,
    skills: DataTypes.STRING,
    image: DataTypes.STRING,
    power: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    intellect: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    magic: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dino',
  });
  return Dino;
};