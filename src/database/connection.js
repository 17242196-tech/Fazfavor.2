const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres',     // nome real do banco
  'postgres',     // usuário
  '123456',       // senha
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: console.log // opcional: mostra queries no console
  }
);

module.exports = sequelize;