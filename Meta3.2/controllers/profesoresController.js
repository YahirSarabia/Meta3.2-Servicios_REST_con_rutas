const profesoresModel = require('../models/profesoresModel');

const getAllProfesores = (req, res) => {
    res.status(200).json(profesoresModel.findAll());
};

const getProfesor = (req, res) => {
    const profesor = profesoresModel.findById(req.params.id);
    if (profesor) {
        res.status(200).json(profesor);
    } else {
        res.status(404).json({ error: 'Profesor no encontrado' });
    }
};

const createProfesor = (req, res) => {
    const nuevoProfesor = req.body;
    if (!nuevoProfesor.nombre || !nuevoProfesor.departamento) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }
    const nuevoRegistro = profesoresModel.add(nuevoProfesor);
    res.status(201).json(nuevoRegistro);
};

const updateProfesor = (req, res) => {
    const profesor = profesoresModel.save(req.params.id, req.body);
    if (profesor) {
        res.status(200).json(profesor);
    } else {
        res.status(404).json({ error: 'Profesor no encontrado' });
    }
};

const deleteProfesor = (req, res) => {
    if (profesoresModel.erase(req.params.id)) {
        res.status(200).json({ msg: `Profesor con id: ${req.params.id} eliminado` });
    } else {
        res.status(500).json({ error: 'Error al eliminar el profesor' });
    }
};

exports.getAllProfesores = getAllProfesores;
exports.getProfesor = getProfesor;
exports.createProfesor = createProfesor;
exports.updateProfesor = updateProfesor;
exports.deleteProfesor = deleteProfesor;
