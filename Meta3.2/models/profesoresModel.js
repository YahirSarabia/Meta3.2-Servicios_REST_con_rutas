const profesores = [
    { id: 1, nombre: 'Dr. Smith', departamento: 'Matemáticas' },
    { id: 2, nombre: 'Dra. Johnson', departamento: 'Física' },
    { id: 3, nombre: 'Dr. García', departamento: 'Química' },
    { id: 4, nombre: 'Dra. Pérez', departamento: 'Informática' }
];

const findById = (id) => profesores.find(profesor => profesor.id == id);
const findAll = () => profesores;
const add = (data) => {
    const nuevoId = profesores.length > 0 ? profesores[profesores.length - 1].id + 1 : 1;
    const nuevoProfesor = { id: nuevoId, ...data };
    profesores.push(nuevoProfesor);
    return nuevoProfesor;
};
const save = (id, data) => {
    let profesor = findById(id);
    if (profesor) {
        Object.assign(profesor, data);
        return profesor;
    }
    return null;
};
const erase = (id) => {
    const index = profesores.findIndex(profesor => profesor.id == id);
    if (index !== -1) {
        profesores.splice(index, 1);
        return true;
    }
    return false;
};

exports.findById = findById;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
