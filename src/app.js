const express = require('express');
const routes = require('./routes');
const app = express();


app.use(express.json());
app.use(routes);//use todas as rotas do projeto

module.exports = app;

//Este arquivo cria a aplicação 
//O express.exports permite JSON
//O module exports exporta o app
