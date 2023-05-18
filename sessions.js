const express = require('express');
const passport = require('passport');

const router = express.Router();

// Importar el controlador necesario
const UserController = require('../controllers/UserController');

// Ruta "/api/sessions/current"
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Obtener el usuario actual desde req.user
  const currentUser = req.user;

  // Devolver la respuesta con el usuario actual
  res.json(currentUser);
});

module.exports = router;
