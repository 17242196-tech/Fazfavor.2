const Evento = require('../models/Evento');

class EventoController {

    async index(req, res) {

        const eventos = await Evento.findAll();

        return res.json(eventos);

    }

    async store(req, res) {

        const evento = await Evento.create(req.body);

        return res.json({
            message: 'Evento criado',
            data: evento
        });

    }

    async show(req, res) {

        const evento = await Evento.findByPk(req.params.id);

        if (!evento) {

            return res.status(404).json({
                message: 'Evento não encontrado'
            });

        }

        return res.json(evento);

    }

    async update(req, res) {

        const evento = await Evento.findByPk(req.params.id);

        if (!evento) {

            return res.status(404).json({
                message: 'Evento não encontrado'
            });

        }

        await evento.update(req.body);

        return res.json({
            message: 'Evento atualizado',
            data: evento
        });

    }

    async destroy(req, res) {

        const evento = await Evento.findByPk(req.params.id);

        if (!evento) {

            return res.status(404).json({
                message: 'Evento não encontrado'
            });

        }

        await evento.destroy();

        return res.json({
            message: 'Evento removido'
        });

    }

}

module.exports = new EventoController();