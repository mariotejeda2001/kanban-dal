const express = require('express');
const auth = require('../middlewares/auth');
const tableroController = require('../controllers/tableroController');

const router = express.Router();

router.use(auth); // Todas las rutas requieren autenticación

router.post('/', tableroController.crearTablero);
router.get('/', tableroController.obtenerTableros);
router.delete('/:id', tableroController.eliminarTablero);

module.exports = router;