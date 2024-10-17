const cursosModel = require('../models/cursosModel');

const getAllCursos = (req, res) => {
    res.status(200).json(cursosModel.findAll());
};

const getCurso = (req, res) => {
    const curso = cursosModel.findById(req.params.id);
    if (curso) {
        res.status(200).json(curso);
    } else {
        res.status(404).json({ error: 'Curso no encontrado' });
    }
};

const createCurso = (req, res) => {
    const nuevoCurso = req.body;
    if (!nuevoCurso.nombre || !nuevoCurso.codigo) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }
    const nuevoRegistro = cursosModel.add(nuevoCurso);
    res.status(201).json(nuevoRegistro);
};

const updateCurso = (req, res) => {
    const curso = cursosModel.save(req.params.id, req.body);
    if (curso) {
        res.status(200).json(curso);
    } else {
        res.status(404).json({ error: 'Curso no encontrado' });
    }
};

const deleteCurso = (req, res) => {
    if (cursosModel.erase(req.params.id)) {
        res.status(200).json({ msg: `Curso con id: ${req.params.id} eliminado` });
    } else {
        res.status(500).json({ error: 'Error al eliminar el curso' });
    }
};

// Operaciones especiales
const inscribirEstudiante = (req, res) => {
    if (cursosModel.inscribirEstudiante(req.params.cursoId, req.params.estudianteId)) {
        res.status(200).json({ msg: 'Estudiante inscrito en el curso' });
    } else {
        res.status(500).json({ error: 'Error al inscribir estudiante' });
    }
};

const eliminarEstudiante = (req, res) => {
    if (cursosModel.eliminarEstudiante(req.params.cursoId, req.params.estudianteId)) {
        res.status(200).json({ msg: 'Estudiante eliminado del curso' });
    } else {
        res.status(500).json({ error: 'Error al eliminar estudiante' });
    }
};

const asociarProfesor = (req, res) => {
    if (cursosModel.asociarProfesor(req.params.cursoId, req.params.profesorId)) {
        res.status(200).json({ msg: 'Profesor asociado al curso' });
    } else {
        res.status(500).json({ error: 'Error al asociar profesor' });
    }
};

const eliminarProfesor = (req, res) => {
    if (cursosModel.eliminarProfesor(req.params.cursoId, req.params.profesorId)) {
        res.status(200).json({ msg: 'Profesor eliminado del curso' });
    } else {
        res.status(500).json({ error: 'Error al eliminar profesor' });
    }
};

// Obtener todos los cursos de un estudiante
const obtenerCursosDeEstudiante = (req, res) => {
    const cursos = cursosModel.obtenerCursosDeEstudiante(req.params.estudianteId);
    res.status(200).json(cursos);
};

// Obtener todos los profesores de un estudiante
const obtenerProfesoresDeEstudiante = (req, res) => {
    const profesores = cursosModel.obtenerProfesoresDeEstudiante(req.params.estudianteId);
    res.status(200).json(profesores);
};

// Obtener todos los cursos de un profesor
const obtenerCursosDeProfesor = (req, res) => {
    const cursos = cursosModel.obtenerCursosDeProfesor(req.params.profesorId);
    res.status(200).json(cursos);
};

// Obtener todos los estudiantes de un profesor
const obtenerEstudiantesDeProfesor = (req, res) => {
    const estudiantes = cursosModel.obtenerEstudiantesDeProfesor(req.params.profesorId);
    res.status(200).json(estudiantes);
};

exports.getAllCursos = getAllCursos;
exports.getCurso = getCurso;
exports.createCurso = createCurso;
exports.updateCurso = updateCurso;
exports.deleteCurso = deleteCurso;
exports.inscribirEstudiante = inscribirEstudiante;
exports.eliminarEstudiante = eliminarEstudiante;
exports.asociarProfesor = asociarProfesor;
exports.eliminarProfesor = eliminarProfesor;
exports.obtenerCursosDeEstudiante = obtenerCursosDeEstudiante;
exports.obtenerProfesoresDeEstudiante = obtenerProfesoresDeEstudiante;
exports.obtenerCursosDeProfesor = obtenerCursosDeProfesor;
exports.obtenerEstudiantesDeProfesor= obtenerEstudiantesDeProfesor;
