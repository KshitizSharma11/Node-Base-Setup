'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  airport.init({
    name: {type:DataTypes.STRING,
      unique:true,
      allowNull: false,
      
    },
    code: {type:DataTypes.STRING,
      unique:true,
      allowNull: false,
      
    },
    address:{type:DataTypes.STRING,
      unique:true,
      allowNull: false,
      
    },
    cityId:{type:DataTypes.Integer,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};