const estudiantes = [
    { id: 1, nombre: 'Juan Camaney', matricula: 123456, semestreIngreso: '2016-2', creditosCursados: 200 },
    { id: 2, nombre: 'Lupita López', matricula: 654321, semestreIngreso: '2017-2', creditosCursados: 100 },
    { id: 3, nombre: 'Pepe Toño', matricula: 234561, semestreIngreso: '2018-2', creditosCursados: 50 },
    { id: 4, nombre: 'Marco Gonzales', matricula: 345612, semestreIngreso: '2019-2', creditosCursados: 25 },
    { id: 5, nombre: 'Luis Cuevas', matricula: 456123, semestreIngreso: '2020-2', creditosCursados: 13 }
];

const findById = function (id) {
    return estudiantes.find((e) => {
        return e.id == id;
    });
};

const findByMatricula = function
    (matricula) {
    return estudiantes.find((e) => {
        return e.matricula == matricula;
    });
};

const findAll = function () {
    return estudiantes;
};

const add = function (data) {
    // Genera un nuevo ID para el estudiante (por ejemplo, el siguiente ID disponible)
    const nuevoId = estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].id + 1 : 1;

    // Crea un nuevo objeto estudiante con la información enviada y el ID generado
    const nuevoEstudiante = {
        id: nuevoId,
        nombre: data.nombre,
        matricula: data.matricula,
        semestreIngreso: data.semestreIngreso,
        creditosCursados: data.creditosCursados
    };

    // Agrega el nuevo estudiante al array
    estudiantes.push(nuevoEstudiante);

    // Retorna el nuevo estudiante agregado
    return nuevoEstudiante;
};

const save = function (id, data) {
    let registro = estudiantes.find((e) => {
        return e.id == id;
    });
    if (registro) {
        for (let [llave, valor] of Object.entries(data)) {
            registro[llave] = valor;
        }
    }
    return registro;
}

const erase = function (id) {
    let registro = estudiantes.find((e) => {
        return e.id == id;
    });
    if (registro) {
        if (estudiantes.splice(estudiantes.indexOf(registro), 1) != -1)
            return true;
        return false;
    }
    return false;
};

exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
