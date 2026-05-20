const Usuario = require('../models/Usuario');

class UsuarioController {

    async index(req, res) {

        const usuarios = await Usuario.findAll();

        return res.json(usuarios);

    }

    async show(req, res) {

        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {

            return res.status(404).json({
                message: 'Usuário não encontrado'
            });

        }

        return res.json(usuario);

    }

    async store(req, res) {

        const usuario = await Usuario.create(req.body);

        return res.status(201).json({
            message: 'Usuário criado com sucesso!',
            data: usuario
        });

    }

    async update(req, res) {

        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {

            return res.status(404).json({
                message: 'Usuário não encontrado'
            });

        }

        await usuario.update(req.body);

        return res.json({
            message: 'Usuário atualizado com sucesso!',
            data: usuario
        });

    }

    async destroy(req, res) {

        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {

            return res.status(404).json({
                message: 'Usuário não encontrado'
            });

        }

        await usuario.destroy();

        return res.json({
            message: 'Usuário removido com sucesso!'
        });

    }

}

module.exports = new UsuarioController();