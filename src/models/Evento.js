const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');

const Evento = sequelize.define('Evento', {

    nome_evento: {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_evento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    local: {
        type: DataTypes.STRING,
        allowNull: true
    }

});

module.exports = Evento;