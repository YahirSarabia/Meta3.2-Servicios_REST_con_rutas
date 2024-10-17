const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.use(express.json());

router.get('/cursos', cursosController.getAllCursos);
router.get('/cursos/:id', cursosController.getCurso);
router.post('/cursos', cursosController.createCurso);
router.put('/cursos/:id', cursosController.updateCurso);
router.patch('/cursos/:id', cursosController.updateCurso);
router.delete('/cursos/:id', cursosController.deleteCurso);

// Operaciones especiales
router.post('/cursos/:cursoId/inscribir-estudiante/:estudianteId', cursosController.inscribirEstudiante);
router.delete('/cursos/:cursoId/eliminar-estudiante/:estudianteId', cursosController.eliminarEstudiante);
router.post('/cursos/:cursoId/asociar-profesor/:profesorId', cursosController.asociarProfesor);
router.delete('/cursos/:cursoId/eliminar-profesor/:profesorId', cursosController.eliminarProfesor);

module.exports = router;
