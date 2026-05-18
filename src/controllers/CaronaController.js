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

        const carona = await Carona.create(req.body);

        return res.status(201).json({
            message: 'Carona criada com sucesso!',
            data: carona
        });

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