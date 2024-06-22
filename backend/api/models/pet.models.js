const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Pet = sequelize.define('pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('perro', 'gato'),
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM('hembra', 'macho'),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {timestamps: false}
    
)

module.exports = Pet

//DEBERIAMOS AÑADIR UN CAMPO URL (FOTOS MASCOTAS?)