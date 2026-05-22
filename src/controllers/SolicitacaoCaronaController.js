const SolicitacaoCarona = require('../models/SolicitacaoCarona');

class SolicitacaoCaronaController {

    async index(req, res) {

        const solicitacoes = await SolicitacaoCarona.findAll();

        return res.json(solicitacoes);

    }

    async store(req, res) {

        const solicitacao = await SolicitacaoCarona.create({

            usuario_id: req.userId,

            carona_id: req.body.carona_id

        });

        return res.json(solicitacao);

    }

}

module.exports = new SolicitacaoCaronaController();