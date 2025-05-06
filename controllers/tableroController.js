const Tablero = require('../models/Tablero');

exports.crearTablero = async (req, res, next) => {
  try {
    const { nombre, descripcion } = req.body;
    const usuarioId = req.usuarioId; // Asume que el middleware de auth ya puso esto
    const tablero = await Tablero.create({ nombre, descripcion, usuario: usuarioId });
    res.status(201).json(tablero);
  } catch (err) {
    next(err);
  }
};

exports.obtenerTableros = async (req, res, next) => {
  try {
    const usuarioId = req.usuarioId;
    const tableros = await Tablero.find({ usuario: usuarioId });
    res.json(tableros);
  } catch (err) {
    next(err);
  }
};

exports.eliminarTablero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuarioId = req.usuarioId;
    const tablero = await Tablero.findOneAndDelete({ _id: id, usuario: usuarioId });
    if (!tablero) return res.status(404).json({ mensaje: 'Tablero no encontrado' });
    res.json({ mensaje: 'Tablero eliminado' });
  } catch (err) {
    next(err);
  }
};
