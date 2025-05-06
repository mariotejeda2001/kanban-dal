const express = require('express');
const auth = require('../middlewares/auth');
const tareaController = require('../controllers/tareaController');

const router = express.Router();

router.use(auth);

router.post('/', tareaController.crearTarea);
router.get('/:tableroId', tareaController.obtenerTareasDeTablero);
router.put('/:id', tareaController.editarTarea);
router.patch('/:id/mover', tareaController.moverTarea);
router.delete('/:id', tareaController.eliminarTarea);

module.exports = router;
