const Evento = require('../models/Evento');

class EventoController {
  async index(req, res) {
    try {
      const eventos = await Evento.findAll();
      return res.json(eventos);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao listar eventos', error: error.message });
    }
  }

  async store(req, res) {
    try {
      const evento = await Evento.create(req.body);
      return res.status(201).json({ message: 'Evento criado', data: evento });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar evento', error: error.message });
    }
  }

  async show(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      return res.json(evento);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar evento', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      await evento.update(req.body);
      return res.json({ message: 'Evento atualizado', data: evento });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar evento', error: error.message });
    }
  }

  async patch(req, res) {
    return this.update(req, res); // reaproveita a lógica do update
  }

  async destroy(req, res) {
    try {
      const evento = await Evento.findByPk(req.params.id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
      await evento.destroy();
      return res.json({ message: 'Evento removido' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao remover evento', error: error.message });
    }
  }
}

module.exports = new EventoController();
