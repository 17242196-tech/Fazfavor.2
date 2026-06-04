const Carona = require('../models/Carona');

class CaronaController {
  async index(req, res) {
    try {
      const caronas = await Carona.findAll();
      return res.json(caronas);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao listar caronas', error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const carona = await Carona.findByPk(id);
      if (!carona) return res.status(404).json({ message: 'Carona não encontrada' });
      return res.json(carona);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar carona', error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { motorista, origem, destino, usuario_id, evento_id, vagas_disponiveis, status } = req.body;
 
      const carona = await Carona.create({
        motorista,
        origem,
        destino,
        usuario_id: usuario_id || req.userId,
         evento_id,
         vagas_disponiveis,
         status
      });
      return res.status(201).json({ message: 'Carona criada com sucesso!', data: carona });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar carona', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const carona = await Carona.findByPk(id);
      if (!carona) return res.status(404).json({ message: 'Carona não encontrada' });

     const { motorista, origem, destino, usuario_id, evento_id, vagas_disponiveis, status } = req.body;

await carona.update({
  motorista: motorista ?? carona.motorista,
  origem: origem ?? carona.origem,
  destino: destino ?? carona.destino,
  usuario_id: usuario_id ?? carona.usuario_id,
  evento_id: evento_id ?? carona.evento_id,
  vagas_disponiveis: vagas_disponiveis ?? carona.vagas_disponiveis,
  status: status ?? carona.status
});


      return res.json({ message: 'Carona atualizada com sucesso!', data: carona });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar carona', error: error.message });
    }
  }

  async patch(req, res) {
    try {
      const { id } = req.params;
      const carona = await Carona.findByPk(id);
      if (!carona) return res.status(404).json({ message: 'Carona não encontrada' });

      await carona.update(req.body);
      return res.json({ message: 'Carona atualizada parcialmente com sucesso!', data: carona });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao atualizar carona parcialmente', error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const carona = await Carona.findByPk(id);
      if (!carona) return res.status(404).json({ message: 'Carona não encontrada' });

      await carona.destroy();
      return res.json({ message: 'Carona removida com sucesso!' });
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao remover carona', error: error.message });
    }
  }
}

module.exports = new CaronaController();
