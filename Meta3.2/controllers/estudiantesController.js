const estudiantesModel = require('../models/estudiantesModel');

const getAllEstudiantes = function (req, res) {
    //res.send('Consultando todos los registros de estudiantes');
    res.status(200).json(estudiantesModel.findAll());
};

const getEstudiante = function (req, res) {
    //res.send('Consultando el registro del estudiante ' + req.params.id);
    datos = estudiantesModel.findById(req.params.id);
    if (datos) {
        res.status(200).
            json(datos);
    } else {
        res.status(404).
            json({ error: 'Not found' });
    }
};

const deleteEstudiante = function (req, res) {
    if (estudiantesModel.erase(req.params.id)) {
        res.status(200).
            json({
                msg: `id: ${req.params.id} deleted 
   succesfully`})
    } else {
        res.status(500).
            json({
                error: `could not delete id: 
   ${req.params.id}`
            })
    }
};

const createEstudiante = function (req, res) {
    // Verifica que la información enviada sea válida
    const nuevoEstudiante = req.body;

    // Asegúrate de que todos los campos requeridos están presentes
    if (!nuevoEstudiante.nombre || !nuevoEstudiante.matricula || !nuevoEstudiante.semestreIngreso || !nuevoEstudiante.creditosCursados) {
        return res.status(400).json({ error: "Faltan datos necesarios para crear un estudiante" });
    }

    // Agrega el nuevo estudiante a la lista (usando el modelo)
    const nuevoRegistro = estudiantesModel.add(nuevoEstudiante);

    if (nuevoRegistro) {
        res.status(201).json(nuevoRegistro); // Retorna el nuevo estudiante creado con status 201 (creado)
    } else {
        res.status(500).json({ error: "Error al agregar el estudiante" });
    }
};

const updateEstudiante = function (req, res) {
    let resultado = estudiantesModel.save(req.params.id, req.body);
    if (resultado) {
        res.status(200).
            json(resultado);
    } else {
        res.status(404).json({ error: 'id not found' });
    }
};


exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;
