const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  fechaCreacion: { type: Date, default: Date.now },
  columna: { type: mongoose.Schema.Types.ObjectId, ref: 'Columna', required: true },
  tablero: { type: mongoose.Schema.Types.ObjectId, ref: 'Tablero', required: true }
});

module.exports = mongoose.model('Tarea', tareaSchema);