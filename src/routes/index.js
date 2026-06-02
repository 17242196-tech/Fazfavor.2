const SolicitacaoCaronaController = require('../controllers/SolicitacaoCaronaController');

const authMiddleware = require('../middlewares/auth');// Import do auth de proteção das rotas menos o login

const AuthController = require('../controllers/AuthController'); //Esta variável importa o AuthController(class)

const express = require('express');

const UsuarioController = require('../controllers/UsuarioController');

const CaronaController = require('../controllers/CaronaController');

const EventoController = require('../controllers/EventoController');

const routes = express.Router();

routes.post('/v1/login', AuthController.login); //Esta é a rota para o AuthControler ou Rota do login

routes.use(authMiddleware); //Proteção das rotas

routes.get('/v1/caronas', CaronaController.index);

routes.get('/v1/caronas/:id', CaronaController.show);

routes.post('/v1/caronas', CaronaController.store);

routes.put('/v1/caronas/:id', CaronaController.update);

routes.delete('/v1/caronas/:id', CaronaController.destroy);

routes.get('/v1/usuarios', UsuarioController.index);

routes.get('/v1/usuarios/:id', UsuarioController.show);

routes.post('/v1/usuarios', UsuarioController.store);

routes.put('/v1/usuarios/:id', UsuarioController.update);

routes.delete('/v1/usuarios/:id', UsuarioController.destroy);

routes.get('/v1/solicitacoes', SolicitacaoCaronaController.index);

routes.post('/v1/solicitacoes', SolicitacaoCaronaController.store);

routes.get('/v1/solicitacoes/:id', SolicitacaoCaronaController.show);

routes.put('/v1/solicitacoes/:id', SolicitacaoCaronaController.update);

routes.patch('/v1/solicitacoes/:id', SolicitacaoCaronaController.update);

routes.delete('/v1/solicitacoes/:id', SolicitacaoCaronaController.delete);

routes.post('/v1/logout', authMiddleware, AuthController.logout);

routes.get('/v1/eventos', EventoController.index);

routes.post('/v1/eventos', EventoController.store);

routes.get('/v1/eventos/:id', EventoController.show);

routes.put('/v1/eventos/:id', EventoController.update);

routes.delete('/v1/eventos/:id', EventoController.destroy);

module.exports = routes;
//Neste arquivo criaremos as rotas versionadas
//O express.Router() cria os gruppos de rotas. 
//routes.get() - Cria a rota GET
// o return res.jason - retorna os JSON
// E é claro o module.exports - exporta as rotas
