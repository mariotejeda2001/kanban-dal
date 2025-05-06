const Columna = require('../models/Columna');

exports.crearColumna = async (req, res, next) => {
  try {
    const { nombre, orden, tablero } = req.body;
    const columna = await Columna.create({ nombre, orden, tablero });
    res.status(201).json(columna);
  } catch (err) {
    next(err);
  }
};

exports.obtenerColumnasDeTablero = async (req, res, next) => {
  try {
    const { tableroId } = req.params;
    const columnas = await Columna.find({ tablero: tableroId }).sort({ orden: 1 });
    res.json(columnas);
  } catch (err) {
    next(err);
  }
};
