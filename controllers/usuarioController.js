const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const { nombreUsuario, email, contraseña } = req.body;
    const hash = await bcrypt.hash(contraseña, 10);
    const usuario = await Usuario.create({ nombreUsuario, email, contraseñaHash: hash });
    res.status(201).json({ mensaje: 'Usuario creado', usuario: { id: usuario._id, nombreUsuario, email } });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const passwordValida = await bcrypt.compare(password, usuario.contraseñaHash);
    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      usuario: {
        _id: usuario._id,
        nombreUsuario: usuario.nombreUsuario,
        email: usuario.email
      }
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
