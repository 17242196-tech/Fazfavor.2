const sequelize = require('./src/database/connection');

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao PostgreSQL com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar:', error);
    });