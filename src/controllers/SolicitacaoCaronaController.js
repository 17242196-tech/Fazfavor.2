const Carona = require('../models/Carona');
const SolicitacaoCarona = require('../models/SolicitacaoCarona');

class SolicitacaoCaronaController {
  // Listar todas as solicitações
  async index(req, res) {
    try {
      const solicitacoes = await SolicitacaoCarona.findAll();
      return res.json(solicitacoes);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao listar solicitações', error: error.message });
    }
  }

  // Criar nova solicitação
  async store(req, res) {
    try {
      const carona = await Carona.findByPk(req.body.carona_id);

      if (!carona) {
        return res.status(404).json({ message: 'Carona não encontrada' });
      }

      if (Number(carona.usuario_id) === Number(req.userId)) {
        return res.status(400).json({ message: 'Você não pode solicitar sua própria carona' });
      }

      const solicitacaoExistente = await SolicitacaoCarona.findOne({
        where: { usuario_id: req.userId, carona_id: req.body.carona_id }
      });

      if (solicitacaoExistente) {
        return res.status(400).json({ message: 'Você já solicitou esta carona' });
      }

      const solicitacao = await SolicitacaoCarona.create({
        usuario_id: req.userId,
        carona_id: req.body.carona_id
      });

      return res.status(201).json({ message: 'Solicitação criada', data: solicitacao });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar solicitação', error: error.message });
    }
  }

  // Buscar solicitação por ID
  async show(req, res) {
    try {
      const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);
      if (!solicitacao) {
        return res.status(404).json({ message: 'Solicitação não encontrada' });
      }
      return res.json(solicitacao);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar solicitação', error: error.message });
    }
  }

  // Atualizar solicitação (PUT)
  async update(req, res) {
    try {
      const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);
      if (!solicitacao) {
        return res.status(404).json({ message: 'Solicitação não encontrada' });
      }

      const statusPermitidos = ['pendente', 'aceita', 'recusada', 'cancelada', 'concluida'];
      if (req.body.status && !statusPermitidos.includes(req.body.status)) {
        return res.status(400).json({ message: 'Status inválido' });
      }

      await solicitacao.update(req.body);
      return res.json({ message: 'Solicitação atualizada', data: solicitacao });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar solicitação', error: error.message });
    }
  }

  // Atualização parcial (PATCH)
  async patch(req, res) {
    return this.update(req, res); // reaproveita a lógica do update
  }

  // Remover solicitação
  async delete(req, res) {
    try {
      const solicitacao = await SolicitacaoCarona.findByPk(req.params.id);
      if (!solicitacao) {
        return res.status(404).json({ message: 'Solicitação não encontrada' });
      }

      await solicitacao.destroy();
      return res.json({ message: 'Solicitação removida' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao remover solicitação', error: error.message });
    }
  }
}

module.exports = new SolicitacaoCaronaController();
