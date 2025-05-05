const Tablero = require('../models/Tablero');

class TableroDAL {
  static async crearTablero(data) {
    return await Tablero.create(data);
  }

  static async obtenerTablerosDeUsuario(usuarioId) {
    return await Tablero.find({ usuario: usuarioId });
  }

  static async eliminarTablero(tableroId) {
    return await Tablero.findByIdAndDelete(tableroId);
  }
}

module.exports = TableroDAL;
