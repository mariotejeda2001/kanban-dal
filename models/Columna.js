const mongoose = require('mongoose');

const columnaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  orden: { type: Number, required: true },
  tablero: { type: mongoose.Schema.Types.ObjectId, ref: 'Tablero', required: true }
});

module.exports = mongoose.model('Columna', columnaSchema);