const express = require('express');
const { body } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');
const validate = require('../middlewares/validate');

const router = express.Router();

router.post(
  '/register',
  [
    body('nombreUsuario').notEmpty(),
    body('email').isEmail(),
    body('contraseña').isLength({ min: 6 })
  ],
  validate,
  usuarioController.register
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }) // <-- Debe ser 'password', no 'contraseña'
  ],
  validate,
  usuarioController.login
);

module.exports = router;
