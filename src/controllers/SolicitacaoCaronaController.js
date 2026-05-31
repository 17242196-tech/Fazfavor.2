const Carona = require('../models/Carona');
const SolicitacaoCarona = require('../models/SolicitacaoCarona');

class SolicitacaoCaronaController {

    async index(req, res) {

        const solicitacoes = await SolicitacaoCarona.findAll();

        return res.json(solicitacoes);

    }

    async store(req, res) {

    const carona = await Carona.findByPk(
        req.body.carona_id
    );

    if (!carona) {

        return res.status(404).json({
            message: 'Carona não encontrada'
        });

    }

    if (carona.usuario_id === req.userId) {

        return res.status(400).json({
            message: 'Você não pode solicitar sua própria carona'
        });

    }

    const solicitacao =
        await SolicitacaoCarona.create({

            usuario_id: req.userId,

            carona_id: req.body.carona_id

        });

    return res.json({
        message: 'Solicitação criada',
        data: solicitacao
    });

}
    async show(req, res) {

        const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);

        if (!solicitacao) {
            return res.status(404).json({
                message: 'Solicitação não encontrada'
            });
        }

        return res.json(solicitacao);

    }

    async update(req, res) {

        const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);

        if (!solicitacao) {
            return res.status(404).json({
                message: 'Solicitação não encontrada'
            });
        }

        await solicitacao.update(req.body);

        return res.json({
            message: 'Solicitação atualizada',
            data: solicitacao
        });

    }

    async delete(req, res) {

        const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);

        if (!solicitacao) {
            return res.status(404).json({
                message: 'Solicitação não encontrada'
            });
        }

        await solicitacao.destroy();

        return res.json({
            message: 'Solicitação removida'
        });

    }

}

module.exports = new SolicitacaoCaronaController();