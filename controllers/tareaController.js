const Tarea = require('../models/Tarea');

exports.crearTarea = async (req, res, next) => {
  try {
    const { titulo, descripcion, columna, tablero } = req.body;
    const tarea = await Tarea.create({ titulo, descripcion, columna, tablero });
    res.status(201).json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.obtenerTareasDeTablero = async (req, res, next) => {
  try {
    const { tableroId } = req.params;
    const tareas = await Tarea.find({ tablero: tableroId }).populate('columna');
    res.json(tareas);
  } catch (err) {
    next(err);
  }
};

exports.editarTarea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const tarea = await Tarea.findByIdAndUpdate(id, { titulo, descripcion }, { new: true });
    if (!tarea) return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.moverTarea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { columna } = req.body;
    const tarea = await Tarea.findByIdAndUpdate(id, { columna }, { new: true });
    if (!tarea) return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    next(err);
  }
};

exports.eliminarTarea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findByIdAndDelete(id);
    if (!tarea) return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    res.json({ mensaje: 'Tarea eliminada' });
  } catch (err) {
    next(err);
  }
};
