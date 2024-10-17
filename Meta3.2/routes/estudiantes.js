const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const cursosController = require('../controllers/cursosController');

router.use(express.json());

router.get('/estudiantes', estudiantesController.getAllEstudiantes);
router.get('/estudiantes/:id', estudiantesController.getEstudiante);
router.post('/estudiantes', estudiantesController.createEstudiante);
router.put('/estudiantes/:id', estudiantesController.updateEstudiante);
router.patch('/estudiantes/:id', estudiantesController.updateEstudiante);
router.delete('/estudiantes/:id', estudiantesController.deleteEstudiante);

// Rutas para obtener todos los cursos de un estudiante
router.get('/estudiantes/:estudianteId/cursos', cursosController.obtenerCursosDeEstudiante);

// Rutas para obtener todos los profesores de un estudiante
router.get('/estudiantes/:estudianteId/profesores', cursosController.obtenerProfesoresDeEstudiante);

module.exports = router;
