require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const usuarioRoutes = require('./routes/usuario');
const tableroRoutes = require('./routes/tablero');
const columnaRoutes = require('./routes/columna');
const tareaRoutes = require('./routes/tarea');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas (no en el index, sino en /api/...)
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/tableros', tableroRoutes);
app.use('/api/columnas', columnaRoutes);
app.use('/api/tareas', tareaRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/kanban')
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error('Error conectando a MongoDB:', err));
