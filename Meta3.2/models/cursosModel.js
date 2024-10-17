const cursos = [
    { id: 1, nombre: 'Álgebra', codigo: 'MAT101', estudiantes: ["4"], profesores: ["1", "2"] },
    { id: 2, nombre: 'Física General', codigo: 'FIS101', estudiantes: ["1", "3", "4"], profesores: ["2"] },
    { id: 3, nombre: 'Química Orgánica', codigo: 'QUI101', estudiantes: ["5"], profesores: ["3"] },
    { id: 4, nombre: 'Introducción a la Programación', codigo: 'INF101', estudiantes: ["2", "4"], profesores: ["4"] }
];

const estudiantesModel = require('./estudiantesModel'); // Para validar la existencia de estudiantes
const profesoresModel = require('./profesoresModel');  // Para validar la existencia de profesores

const findById = (id) => cursos.find(curso => curso.id == id);

const findAll = () => cursos;

const add = (data) => {
    const nuevoId = cursos.length > 0 ? cursos[cursos.length - 1].id + 1 : 1;
    const nuevoCurso = { id: nuevoId, ...data, estudiantes: [], profesores: [] };
    cursos.push(nuevoCurso);
    return nuevoCurso;
};

const save = (id, data) => {
    let curso = findById(id);
    if (curso) {
        Object.assign(curso, data);
        return curso;
    }
    return null;
};

const erase = (id) => {
    const index = cursos.findIndex(curso => curso.id == id);
    if (index !== -1) {
        cursos.splice(index, 1);
        return true;
    }
    return false;
};

// Inscribir estudiante en curso
const inscribirEstudiante = (cursoId, estudianteId) => {
    const curso = findById(cursoId);
    const estudiante = estudiantesModel.findById(estudianteId);
    
    if (curso && estudiante) {
        if (!curso.estudiantes.includes(estudianteId)) {
            curso.estudiantes.push(estudianteId);
            return true;
        }
    }
    return false;
};

// Eliminar estudiante de curso
const eliminarEstudiante = (cursoId, estudianteId) => {
    const curso = findById(cursoId);
    
    if (curso) {
        const index = curso.estudiantes.indexOf(estudianteId);
        if (index !== -1) {
            curso.estudiantes.splice(index, 1);
            return true;
        }
    }
    return false;
};

// Asociar profesor a curso
const asociarProfesor = (cursoId, profesorId) => {
    const curso = findById(cursoId);
    const profesor = profesoresModel.findById(profesorId);
    
    if (curso && profesor) {
        if (!curso.profesores.includes(profesorId)) {
            curso.profesores.push(profesorId);
            return true;
        }
    }
    return false;
};

// Eliminar profesor de curso
const eliminarProfesor = (cursoId, profesorId) => {
    const curso = findById(cursoId);
    
    if (curso) {
        const index = curso.profesores.indexOf(profesorId);
        if (index !== -1) {
            curso.profesores.splice(index, 1);
            return true;
        }
    }
    return false;
};

// Obtener todos los cursos de un estudiante
const obtenerCursosDeEstudiante = (estudianteId) => {
    return cursos.filter(curso => curso.estudiantes.includes(estudianteId));
};

// Obtener todos los profesores de un estudiante (a través de los cursos)
const obtenerProfesoresDeEstudiante = (estudianteId) => {
    const cursosDelEstudiante = obtenerCursosDeEstudiante(estudianteId);
    const profesores = new Set(); // Usamos Set para evitar duplicados

    cursosDelEstudiante.forEach(curso => {
        curso.profesores.forEach(profesorId => {
            profesores.add(profesorId);
        });
    });

    // Convertir el Set a un array y regresar
    return Array.from(profesores).map(profesorId => profesoresModel.findById(profesorId));
};

// Obtener todos los cursos de un profesor
const obtenerCursosDeProfesor = (profesorId) => {
    return cursos.filter(curso => curso.profesores.includes(profesorId));
};

// Obtener todos los estudiantes de un profesor (a través de los cursos)
const obtenerEstudiantesDeProfesor = (profesorId) => {
    const cursosDelProfesor = obtenerCursosDeProfesor(profesorId);
    const estudiantes = new Set(); // Usamos Set para evitar duplicados

    cursosDelProfesor.forEach(curso => {
        curso.estudiantes.forEach(estudianteId => {
            estudiantes.add(estudianteId);
        });
    });

    // Convertir el Set a un array y regresar
    return Array.from(estudiantes).map(estudianteId => estudiantesModel.findById(estudianteId));
};



exports.findById = findById;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
exports.inscribirEstudiante = inscribirEstudiante;
exports.eliminarEstudiante = eliminarEstudiante;
exports.asociarProfesor = asociarProfesor;
exports.eliminarProfesor = eliminarProfesor;
exports.obtenerCursosDeEstudiante = obtenerCursosDeEstudiante;
exports.obtenerProfesoresDeEstudiante = obtenerProfesoresDeEstudiante;
exports.obtenerCursosDeProfesor = obtenerCursosDeProfesor;
exports.obtenerEstudiantesDeProfesor= obtenerEstudiantesDeProfesor;
