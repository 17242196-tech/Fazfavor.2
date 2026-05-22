const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');

const SolicitacaoCarona = sequelize.define('SolicitacaoCarona', {

    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendente'
    },

    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    carona_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = SolicitacaoCarona;