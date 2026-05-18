const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');

const Carona = sequelize.define('Carona', {

    motorista: {
        type: DataTypes.STRING,
        allowNull: false
    },

    origem: {
        type: DataTypes.STRING,
        allowNull: false
    },

    destino: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Carona;