const Usuario = require('../models/Usuario');

class UsuarioController {
  // Listar todos os usuários
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      return res.status(500).json({ message: 'Erro ao listar usuários', error: error.message });
    }
  }

  // Buscar usuário por ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.json(usuario);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  // Criar novo usuário
  async store(req, res) {
    try {
      const { nome, email, telefone, senha, endereco } = req.body;

      // Aqui não precisa hashear, o model já faz isso no hook beforeCreate
      const usuario = await Usuario.create({
        nome,
        email,
        telefone,
        senha,
        endereco
      });

      return res.status(201).json({
        message: 'Usuário criado com sucesso!',
        data: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email
        }
      });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(400).json({ message: 'Erro ao criar usuário', error: error.message });
    }
  }

  // Atualizar usuário (PUT)
  async update(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const dados = { ...req.body };

      // Se senha vier, o model pode ter um hook beforeUpdate para hashear
      await usuario.update(dados);

      return res.json({ message: 'Usuário atualizado com sucesso!', data: usuario });
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      return res.status(400).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  // Atualizar parcialmente usuário (PATCH)
  async patch(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const dados = { ...req.body };
      await usuario.update(dados);

      return res.json({ message: 'Usuário atualizado parcialmente!', data: usuario });
    } catch (error) {
      console.error('Erro ao atualizar parcialmente usuário:', error);
      return res.status(400).json({ message: 'Erro ao atualizar parcialmente', error: error.message });
    }
  }

  // Remover usuário
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      await usuario.destroy();
      return res.json({ message: 'Usuário removido com sucesso!' });
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
      return res.status(400).json({ message: 'Erro ao remover usuário', error: error.message });
    }
  }

  // Migrar senhas em texto puro para hash
  async migratePasswords(req, res) {
    try {
      const usuarios = await Usuario.findAll();

      for (const u of usuarios) {
        if (!u.senha.startsWith('$2b$')) {
          // O model já tem hook, mas aqui garantimos manualmente
          const bcrypt = require('bcrypt');
          const senhaHash = await bcrypt.hash(u.senha, 8);
          await u.update({ senha: senhaHash });
        }
      }

      return res.json({ message: 'Senhas migradas para hash com sucesso!' });
    } catch (error) {
      console.error('Erro ao migrar senhas:', error);
      return res.status(500).json({ message: 'Erro ao migrar senhas', error: error.message });
    }
  }
}

module.exports = new UsuarioController();
