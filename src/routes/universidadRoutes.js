const universidadController = require('../controller/universidadController');
const express = require('express');

const router = express.Router();

router.get('/', universidadController.listarUniversidades);
router.post('/',universidadController.crearUniversidad);
router.put('/:id',universidadController.actualizarUniversidad);
router.delete('/:id', universidadController.eliminarUniversidad);

module.exports = router;