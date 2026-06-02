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

        // Não pode solicitar a própria carona
        if (
            Number(carona.usuario_id) ===
            Number(req.userId)
        ) {

            return res.status(400).json({
                message: 'Você não pode solicitar sua própria carona'
            });

        }

        // Não pode solicitar duas vezes a mesma carona
        const solicitacaoExistente =
            await SolicitacaoCarona.findOne({
                where: {
                    usuario_id: req.userId,
                    carona_id: req.body.carona_id
                }
            });

        if (solicitacaoExistente) {

            return res.status(400).json({
                message: 'Você já solicitou esta carona'
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
        const statusPermitidos = ['pendente', 'aceita', 'recusada', 'cancelada', 'concluida'];

        if (
            req.body.status &&
            !statusPermitidos.includes(req.body.status)
        ) {

            return res.status(400).json({
                message: 'Status inválido'
            });

        }

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