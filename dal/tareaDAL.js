const Tarea = require('../models/Tarea');

class TareaDAL {
  static async crearTarea(data) {
    return await Tarea.create(data);
  }

  static async obtenerTareasDeTablero(tableroId) {
    return await Tarea.find({ tablero: tableroId }).populate('columna');
  }

  static async editarTarea(tareaId, data) {
    return await Tarea.findByIdAndUpdate(tareaId, data, { new: true });
  }

  static async moverTarea(tareaId, columnaId) {
    return await Tarea.findByIdAndUpdate(tareaId, { columna: columnaId }, { new: true });
  }

  static async eliminarTarea(tareaId) {
    return await Tarea.findByIdAndDelete(tareaId);
  }
}

module.exports = TareaDAL;
