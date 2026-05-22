const sequelize = require('./src/database/connection');

const Carona = require('./src/models/Carona');

const SolicitacaoCarona = require('./src/models/SolicitacaoCarona');

async function update() {

    await sequelize.sync({ alter: true });

    console.log('Tabela atualizada!');

}

update();