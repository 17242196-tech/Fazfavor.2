const sequelize = require('./src/database/connection');

const Carona = require('./src/models/Carona');

sequelize.sync()
    .then(() => {

        console.log('Tabela criada com sucesso!');

    })
    .catch((error) => {

        console.error('Erro ao criar tabela:', error);

    });