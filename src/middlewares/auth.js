const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica se o header Authorization foi enviado
  if (!authHeader) {
    return res.status(401).json({ message: 'Token não informado' });
  }

  // Divide "Bearer token"
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  const [scheme, token] = parts;

  // Verifica se começa com "Bearer"
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Token mal formatado' });
  }

  // Valida o token
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // Se tudo certo, guarda o id do usuário no request
    req.userId = decoded.id;

    // Libera a rota
    return next();
  });
};
