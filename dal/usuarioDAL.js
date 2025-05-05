const Usuario = require('../models/Usuario');

class UsuarioDAL {
  static async crearUsuario(data) {
    return await Usuario.create(data);
  }

  static async buscarPorEmail(email) {
    return await Usuario.findOne({ email });
  }

  static async obtenerPorId(id) {
    return await Usuario.findById(id);
  }
}

module.exports = UsuarioDAL;
