const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao listar usuários', error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { nome, email, telefone, senha, endereco } = req.body;
      const senhaHash = await bcrypt.hash(senha, 10);
      const usuario = await Usuario.create({ nome, email, telefone, senha: senhaHash, endereco });
      return res.status(201).json({ message: 'Usuário criado com sucesso!', data: usuario });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar usuário', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

      const dados = { ...req.body };
      if (dados.senha) dados.senha = await bcrypt.hash(dados.senha, 10);

      await usuario.update(dados);
      return res.json({ message: 'Usuário atualizado com sucesso!', data: usuario });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  async patch(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

      const dados = { ...req.body };
      if (dados.senha) dados.senha = await bcrypt.hash(dados.senha, 10);

      await usuario.update(dados);
      return res.json({ message: 'Usuário atualizado parcialmente!', data: usuario });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar parcialmente', error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });

      await usuario.destroy();
      return res.json({ message: 'Usuário removido com sucesso!' });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao remover usuário', error: error.message });
    }
  }

  async migratePasswords(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      for (const u of usuarios) {
        if (!u.senha.startsWith('$2b$')) {
          const senhaHash = await bcrypt.hash(u.senha, 10);
          await u.update({ senha: senhaHash });
        }
      }
      return res.json({ message: 'Senhas migradas para hash com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao migrar senhas', error: error.message });
    }
  }
}

module.exports = new UsuarioController();
