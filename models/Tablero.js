const mongoose = require('mongoose');

const tableroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

module.exports = mongoose.model('Tablero', tableroSchema);