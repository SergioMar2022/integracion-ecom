const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router();

// Ruta "/login" para el inicio de sesión
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ message: 'Inicio de sesión exitoso' });
    });
  })(req, res, next);
});

// Ruta "/logout" para cerrar la sesión
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Sesión cerrada exitosamente' });
});

module.exports = router;
