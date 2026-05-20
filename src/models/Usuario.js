const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database/connection');

class Usuario extends Model {}

Usuario.init({

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    telefone: {
        type: DataTypes.STRING
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {

    sequelize,
    modelName: 'Usuario'

});

module.exports = Usuario;