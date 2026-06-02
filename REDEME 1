# FAZFAVOR API 🚗

Backend oficial do projeto FAZFAVOR.

A API foi desenvolvida utilizando arquitetura RESTful, Node.js, Express, Sequelize e PostgreSQL.

O objetivo do sistema é gerenciar:
- usuários;
- caronas;
- eventos;
- solicitações de carona;
- autenticação.

---

# Tecnologias Utilizadas

## Backend
- Node.js
- Express
- Sequelize ORM

## Banco de Dados
- PostgreSQL

## Ferramentas
- DBeaver
- Insomnia
- Git
- GitHub

---

# Arquitetura do Projeto

```plaintext
fazfavor-api/
│
├── node_modules/
├── src/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── server.js
├── package.json
├── .gitignore
└── README.md
```

---

# Pré-requisitos

Antes de iniciar o projeto, será necessário instalar:

## 1. Node.js
Download:
https://nodejs.org

Verificar instalação:

```bash
node -v
npm -v
```

---

## 2. PostgreSQL
Download:
https://www.postgresql.org/download/

Durante a instalação:
- definir senha do usuário postgres;
- manter porta padrão 5432.

---

## 3. DBeaver
Download:
https://dbeaver.io/download/

Utilizado para:
- visualizar banco;
- criar database;
- visualizar tabelas;
- executar SQL.

---

## 4. Insomnia
Download:
https://insomnia.rest/download

Utilizado para:
- testar rotas;
- enviar JSON;
- testar API REST.

---

# Clonando o Projeto

```bash
git clone URL_DO_REPOSITORIO
```

Entrar na pasta:

```bash
cd fazfavor-api
```

---

# Instalar Dependências

```bash
npm install
```

---

# Dependências Principais

## Express
Framework backend.

```bash
npm install express
```

---

## Sequelize
ORM responsável pela comunicação com PostgreSQL.

```bash
npm install sequelize
```

---

## PostgreSQL Driver
Driver do PostgreSQL para Node.js.

```bash
npm install pg pg-hstore
```

---

## Nodemon (Opcional)
Reinicia o servidor automaticamente.

```bash
npm install nodemon --save-dev
```

---

# Criando o Banco de Dados

Abrir DBeaver.

Criar database:

```plaintext
fazfavor
```

---

# Configuração da Conexão

Arquivo:

```plaintext
src/database/connection.js
```

Configuração:

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'fazfavor',
    'postgres',
    'SUA_SENHA',
    {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
);

module.exports = sequelize;
```

---

# Rodando o Projeto

## Iniciar Servidor

```bash
node server.js
```

Resultado esperado:

```plaintext
Servidor rodando na porta 3000
```

---

# Testando no Navegador

Abrir:

```plaintext
http://localhost:3000/v1/caronas
```

---

# Rotas Disponíveis

## Caronas

### BREVE A DEMAIS ESTARÃO AQUI TB

```http
GET /v1/caronas
```

---

### Buscar por ID

```http
GET /v1/caronas/:id
```

Exemplo:

```http
GET /v1/caronas/1
```

---

### Criar Carona

```http
POST /v1/caronas
```

JSON:

```json
{
  "motorista": "Roberto",
  "origem": "Recife",
  "destino": "Olinda"
}
```

---

### Atualizar Carona

```http
PUT /v1/caronas/:id
```

JSON:

```json
{
  "motorista": "Roberto Silva",
  "origem": "Recife",
  "destino": "Paulista"
}
```

---

### Remover Carona

```http
DELETE /v1/caronas/:id
```

---

# Padrão RESTful Utilizado

| Método | Função |
|---|---|
| GET | Buscar dados |
| POST | Criar dados |
| PUT | Atualizar dados |
| PATCH | Atualizar parcialmente |
| DELETE | Remover dados |

---

# Estrutura REST Utilizada

```plaintext
/v1/caronas
```

O prefixo:

```plaintext
/v1
```

representa:
- versionamento da API.

---

# Padrões Utilizados

- Arquitetura RESTful;
- MVC;
- JSON API;
- Versionamento de rotas;
- Controllers;
- ORM Sequelize.

---

# Funcionalidades Futuras

- autenticação JWT;
- hash de senha;
- usuários;
- eventos;
- solicitações de carona;
- regras automáticas de vagas;
- proteção de rotas;
- validações.

---

# Equipe

Projeto desenvolvido para fins acadêmicos e evolução profissional.
Anderson, Isabelle e Roberto 
---

# Observações

Caso ocorra erro de conexão com PostgreSQL:

Verificar:
- PostgreSQL ligado;
- porta correta;
- usuário postgres;
- senha correta;
- banco fazfavor criado.

---

# Comandos Úteis

## Instalar Dependências

```bash
npm install
```

---

## Rodar Projeto

```bash
node server.js
```

---

## Instalar Dependências Novas

```bash
npm install NOME_DA_DEPENDENCIA
```

---

# Git

## Inicializar Projeto

```bash
git init
```

---

## Adicionar Arquivos

```bash
git add .
```

---

## Commit

```bash
git commit -m "mensagem"
```

---

## Conectar ao GitHub

```bash
git remote add origin URL_DO_REPOSITORIO
```

---

## Enviar Projeto

```bash
git push -u origin main
```

---

# API FAZFAVOR 🚗

Sistema backend para gerenciamento de caronas comunitárias.

