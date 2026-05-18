const express = require('express');

const CaronaController = require('../controllers/CaronaController');

const routes = express.Router();

routes.get('/v1/caronas', CaronaController.index);

routes.get('/v1/caronas/:id', CaronaController.show);

routes.post('/v1/caronas', CaronaController.store);

routes.put('/v1/caronas/:id', CaronaController.update);

routes.delete('/v1/caronas/:id', CaronaController.destroy);

module.exports = routes;
//Neste arquivo criaremos as rotas versionadas
//O express.Router() cria os gruppos de rotas. 
//routes.get() - Cria a rota GET
// o return res.jason - retorna os JSON
// E é claro o module.exports - exporta as rotas
