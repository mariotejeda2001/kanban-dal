const express = require('express');
const auth = require('../middlewares/auth');
const columnaController = require('../controllers/columnaController');

const router = express.Router();

router.use(auth);

router.post('/', columnaController.crearColumna);
router.get('/:tableroId', columnaController.obtenerColumnasDeTablero);

module.exports = router;
