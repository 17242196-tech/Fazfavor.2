const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const Usuario = require('../models/Usuario');

class AuthController {
  // Login
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      console.log('Tentando login...');
      console.log('Email recebido:', email);
      console.log('Senha recebida:', senha);

      // Busca usuário pelo email
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        console.warn('Usuário não encontrado:', email);
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      console.log('Hash armazenado no banco:', usuario.senha);

      // Compara senha digitada com hash do banco
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      console.log('Resultado da comparação:', senhaValida);

      if (!senhaValida) {
        console.warn('Senha inválida para usuário:', email);
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
      console.error('Erro inesperado no login:', error);
      return res.status(500).json({ message: 'Erro no login', error: error.message });
    }
  }

  // Logout
  async logout(req, res) {
    try {
      return res.json({ message: 'Logout realizado com sucesso!' });
    } catch (error) {
      console.error('Erro inesperado no logout:', error);
      return res.status(500).json({ message: 'Erro no logout', error: error.message });
    }
  }
}

module.exports = new AuthController();
