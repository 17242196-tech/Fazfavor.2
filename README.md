Fazfavor API
API REST para gerenciamento de usuários, caronas, solicitações de carona e eventos.
Construída com Node.js, Express, Sequelize e PostgreSQL.

📌 Instalação
bash
# Clonar repositório
git clone https://github.com/17242196-tech/Fazfavor.2.git

cd Fazfavor.2

# Instalar dependências
npm install

# Rodar servidor em modo desenvolvimento
npm run dev

# Rodar servidor em modo produção
npm start
📌 Dependências
express → servidor e rotas.

sequelize → ORM para PostgreSQL.

pg e pg-hstore → integração com banco.

bcryptjs → criptografia de senhas (gera hash automático no banco).

jsonwebtoken → autenticação via token.

nodemon → reiniciar servidor automaticamente em desenvolvimento.

📌 Configuração do Banco
Arquivo src/database/connection.js:

js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres',     // nome do banco
  'postgres',     // usuário
  '123456',       // senha
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: console.log
  }
);

module.exports = sequelize;
📌 Rotas da API
🔓 Rotas públicas
POST /v1/register → cadastro de usuário.

POST /v1/login → login.

POST /v1/migrar-senhas → migração de senhas.

🔒 Rotas protegidas (JWT obrigatório)
👤 Usuários
GET /v1/usuarios → lista todos.

GET /v1/usuarios/:id → busca por ID.

PUT /v1/usuarios/:id → atualização completa.

PATCH /v1/usuarios/:id → atualização parcial.

DELETE /v1/usuarios/:id → remove usuário.

🚗 Caronas
GET /v1/caronas → lista todas.

GET /v1/caronas/:id → busca por ID.

POST /v1/caronas → cria carona.

PUT /v1/caronas/:id → atualização completa.

PATCH /v1/caronas/:id → atualização parcial.

DELETE /v1/caronas/:id → remove carona.

📩 Solicitações de Carona
GET /v1/solicitacoes → lista todas.

GET /v1/solicitacoes/:id → busca por ID.

POST /v1/solicitacoes → cria solicitação.

PUT /v1/solicitacoes/:id → atualização completa.

PATCH /v1/solicitacoes/:id → atualização parcial.

DELETE /v1/solicitacoes/:id → remove solicitação.

🎉 Eventos
GET /v1/eventos → lista todos.

GET /v1/eventos/:id → busca por ID.

POST /v1/eventos → cria evento.

PUT /v1/eventos/:id → atualização completa.

PATCH /v1/eventos/:id → atualização parcial.

DELETE /v1/eventos/:id → remove evento.

🔑 Autenticação extra
POST /v1/logout → logout.

📌 Controllers
UsuarioController → cadastro, atualização (PUT/PATCH), remoção, migração de senhas.

CaronaController → CRUD completo, validações de usuario_id.

SolicitacaoCaronaController → CRUD completo, regras de negócio (não solicitar própria carona, status permitido).

EventoController → CRUD completo.

📌 Models
Usuario → id, nome, email, senha (armazenada como hash automático via bcryptjs).

Carona → relacionado ao usuário.

SolicitacaoCarona → status (default: pendente), usuario_id, carona_id.

Evento → CRUD completo.

📌 Diferenças em relação ao anterior
Banco de dados: agora documentado com configuração Sequelize + PostgreSQL.

Rotas: organizadas em públicas vs protegidas; corrigidos PATCH em todos os controllers.

Controllers: detalhados com métodos e regras de negócio (ex: status permitido em solicitações).

Models: descritos com campos principais e relacionamentos.

Execução: instruções claras (npm install, npm run dev, npm start).

Organização: README dividido em seções estruturadas (Instalação, Dependências, Banco, Rotas, Controllers, Models, Diferenças).

Senhas: agora documentado que ficam armazenadas como hash automático no banco (via bcryptjs), garantindo segurança.

🚀 Conclusão
API robusta com autenticação JWT.

CRUD completo para Usuários, Caronas, Solicitações de Carona e Eventos.

Diferença clara entre PUT (atualização total) e PATCH (atualização parcial).

Estrutura modular: models, controllers, routes.

Banco configurado com Sequelize + PostgreSQL.

Senhas protegidas com hash automático.

Documentação atualizada com histórico das mudanças.
