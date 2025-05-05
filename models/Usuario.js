const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseñaHash: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);