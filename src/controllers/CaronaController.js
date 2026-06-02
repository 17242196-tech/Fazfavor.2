const Carona = require('../models/Carona');

class CaronaController {

    async index(req, res) {

        const caronas = await Carona.findAll();

        return res.json(caronas);

    }

    async show(req, res) {

        const { id } = req.params;

        const carona = await Carona.findByPk(id);

        if (!carona) {

            return res.status(404).json({
                message: 'Carona não encontrada'
            });

        }

        return res.json(carona);

    }

    async store(req, res) {

        console.log('USER ID:', req.userId);

        const carona = await Carona.create({

            ...req.body,

            usuario_id: req.userId

        });

        return res.json(carona);

    }

    async update(req, res) {

        const { id } = req.params;

        const carona = await Carona.findByPk(id);

        if (!carona) {

            return res.status(404).json({
                message: 'Carona não encontrada'
            });

        }

        await carona.update(req.body);

        return res.json({
            message: 'Carona atualizada com sucesso!',
            data: carona
        });

    }
    async destroy(req, res) {

        const { id } = req.params;

        const carona = await Carona.findByPk(id);

        if (!carona) {

            return res.status(404).json({
                message: 'Carona não encontrada'
            });

        }

        await carona.destroy();

        return res.json({
            message: 'Carona removida com sucesso!'
        });

    }

}

module.exports = new CaronaController();