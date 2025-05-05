const mongoose = require('mongoose');
const UsuarioDAL = require('../dal/usuarioDAL');
const TableroDAL = require('../dal/tableroDAL');
const ColumnaDAL = require('../dal/columnaDAL');
const TareaDAL = require('../dal/tareaDAL');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/kanban', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // Limpia la base de datos para pruebas
  await mongoose.connection.db.dropDatabase();

  // Crear usuario
  const usuario = await UsuarioDAL.crearUsuario({
    nombreUsuario: 'Juan',
    email: 'juan@hotmail.com',
    contraseñaHash: 'hash123'
  });

  // Crear tablero
  const tablero = await TableroDAL.crearTablero({
    nombre: 'Proyecto Node',
    descripcion: 'Tablero de ejemplo',
    usuario: usuario._id
  });

  // Crear columnas
  const columnaPendiente = await ColumnaDAL.crearColumna({
    nombre: 'Pendiente',
    orden: 1,
    tablero: tablero._id
  });
  const columnaHecho = await ColumnaDAL.crearColumna({
    nombre: 'Hecho',
    orden: 2,
    tablero: tablero._id
  });

  // Crear tarea
  const tarea = await TareaDAL.crearTarea({
    titulo: 'Configurar proyecto',
    descripcion: 'Inicializar Node y Mongo',
    columna: columnaPendiente._id,
    tablero: tablero._id
  });

  // Mostrar tareas
  const tareas = await TareaDAL.obtenerTareasDeTablero(tablero._id);
  console.log('Tareas:', tareas);

  // Mover tarea a otra columna
  await TareaDAL.moverTarea(tarea._id, columnaHecho._id);

  // Editar tarea
  await TareaDAL.editarTarea(tarea._id, { titulo: 'Configurar y probar proyecto' });

  // Eliminar tarea
  await TareaDAL.eliminarTarea(tarea._id);

  await mongoose.disconnect();
}

main().catch(console.error);
