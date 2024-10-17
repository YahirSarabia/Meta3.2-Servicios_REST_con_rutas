const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');
const cursosController = require('../controllers/cursosController');

router.use(express.json());

router.get('/profesores', profesoresController.getAllProfesores);
router.get('/profesores/:id', profesoresController.getProfesor);
router.post('/profesores', profesoresController.createProfesor);
router.put('/profesores/:id', profesoresController.updateProfesor);
router.patch('/profesores/:id', profesoresController.updateProfesor);
router.delete('/profesores/:id', profesoresController.deleteProfesor);

// Rutas para obtener todos los cursos de un profesor
router.get('/profesores/:profesorId/cursos', cursosController.obtenerCursosDeProfesor);

// Rutas para obtener todos los estudiantes de un profesor
router.get('/profesores/:profesorId/estudiantes', cursosController.obtenerEstudiantesDeProfesor);

module.exports = router;
