const express = require('express');
const routes = express.Router();

// Controllers
const AuthController = require('../controllers/AuthController');
const UsuarioController = require('../controllers/UsuarioController');
const CaronaController = require('../controllers/CaronaController');
const SolicitacaoCaronaController = require('../controllers/SolicitacaoCaronaController');
const EventoController = require('../controllers/EventoController');

// Middleware
const authMiddleware = require('../middlewares/auth');

// Rotas públicas (não precisam de token)
routes.post('/v1/register', UsuarioController.store);
routes.post('/v1/login', AuthController.login);

// 🔄 Rota de migração de senhas (executa uma vez)
routes.post('/v1/migrar-senhas', UsuarioController.migratePasswords);

// Rotas protegidas (precisam de token)
routes.use(authMiddleware);

// Caronas
routes.get('/v1/caronas', CaronaController.index);
routes.get('/v1/caronas/:id', CaronaController.show);
routes.post('/v1/caronas', CaronaController.store);
routes.put('/v1/caronas/:id', CaronaController.update);
routes.patch('/v1/caronas/:id', CaronaController.update);
routes.delete('/v1/caronas/:id', CaronaController.destroy);

// Usuários
routes.get('/v1/usuarios', UsuarioController.index);
routes.get('/v1/usuarios/:id', UsuarioController.show);
routes.put('/v1/usuarios/:id', UsuarioController.update);
routes.patch('/v1/usuarios/:id', UsuarioController.update); // ✅ corrigido
routes.delete('/v1/usuarios/:id', UsuarioController.destroy);

// Solicitações de carona
routes.get('/v1/solicitacoes', SolicitacaoCaronaController.index);
routes.get('/v1/solicitacoes/:id', SolicitacaoCaronaController.show);
routes.post('/v1/solicitacoes', SolicitacaoCaronaController.store);
routes.put('/v1/solicitacoes/:id', SolicitacaoCaronaController.update);
routes.patch('/v1/solicitacoes/:id', SolicitacaoCaronaController.update); // ✅ corrigido
routes.delete('/v1/solicitacoes/:id', SolicitacaoCaronaController.delete);

// Eventos
routes.get('/v1/eventos', EventoController.index);
routes.get('/v1/eventos/:id', EventoController.show);
routes.post('/v1/eventos', EventoController.store);
routes.put('/v1/eventos/:id', EventoController.update);
routes.patch('/v1/eventos/:id', EventoController.update); // ✅ corrigido
routes.delete('/v1/eventos/:id', EventoController.destroy);

// Logout (já protegido pelo authMiddleware global)
routes.post('/v1/logout', AuthController.logout);

module.exports = routes;
