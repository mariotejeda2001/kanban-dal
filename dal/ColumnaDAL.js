const Columna = require('../models/Columna');

class ColumnaDAL {
  static async crearColumna(data) {
    return await Columna.create(data);
  }

  static async obtenerColumnasDeTablero(tableroId) {
    return await Columna.find({ tablero: tableroId }).sort({ orden: 1 });
  }
}

module.exports = ColumnaDAL;
