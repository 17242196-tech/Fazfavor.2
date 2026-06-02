const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Carona = sequelize.define('Carona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  motorista: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  origem: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  destino: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  placa: {
    type: DataTypes.STRING(10),   // ✅ placa como texto
    allowNull: false
  },
  veiculo: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'carona',   // força nome da tabela
  timestamps: false      // remove createdAt/updatedAt
});

module.exports = Carona;
