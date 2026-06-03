const bcrypt = require('bcryptjs');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class Usuario extends Model {
  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha);
  }
}

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
  modelName: 'Usuario',
  tableName: 'usuario',
  timestamps: false,
  hooks: {
    beforeCreate: async (usuario) => {
      usuario.senha = await bcrypt.hash(usuario.senha, 8);
    },
    beforeUpdate: async (usuario) => {
      if (usuario.changed('senha')) {
        usuario.senha = await bcrypt.hash(usuario.senha, 8);
      }
    }
  }
});

module.exports = Usuario;
