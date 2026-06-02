const Evento = require('./src/models/Evento');

Evento.sync({ alter: true })

.then(() => {

    console.log('Tabela Eventos criada com sucesso!');

})

.catch((error) => {

    console.log(error);

});