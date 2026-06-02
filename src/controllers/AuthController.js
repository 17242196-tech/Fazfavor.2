const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const Usuario = require('../models/Usuario');

class AuthController {
  // Login
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      // Busca usuário pelo email
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      // Compara senha digitada com hash do banco
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) {
        return res.status(401).json({ message: 'Senha inválida' });
      }

      // Gera token JWT
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        authConfig.secret,
        { expiresIn: authConfig.expiresIn }
      );

      return res.json({
        message: 'Login realizado com sucesso!',
        token,
        user: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro no login', error: error.message });
    }
  }

  // Logout
  async logout(req, res) {
    try {
      // Como JWT é stateless, basta responder sucesso
      return res.json({ message: 'Logout realizado com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro no logout', error: error.message });
    }
  }
}

module.exports = new AuthController();
