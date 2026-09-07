const fs = require('fs');
class CareerManager {
    subjects = [];

    constructor() {
    console.log("Hola desde el constructor");
    this.subjects = [];
    this.path = "./data/subjects.json";
    //al iniciar leemos lo que esta en el Json local
    this.loadSubjects();
    }

    addSubject(subject) {
    if (!subject.id || !subject.name || !subject.semester || !subject.hours) {
        console.error("Faltan parámetros para agregar la materia");
        return;
    }

    this.subjects.push(subject);
    this.saveSubjects();
    }

    getSubjects() {
    return this.subjects;
    }

    getSubjectById(id) {
    const subject = this.subjects.find(subject => subject.id === id);

    if (!subject) {
        console.error("No se encontró la materia con el ID " + id);
        return {};
    }

        return subject;
    }
    saveSubjects(){
        const data = JSON.stringify( this.subjects, null, 2);
        fs.writeFileSync(this.path, data , 'utf-8');
    }
    loadSubjects(){
        //validamos que el archivo existe
        if ( !fs.existsSync(this.path) ){
            this.subjects = [];
            return;
        }
        const data = fs.readFileSync(this.path, 'utf-8');
        this.subjects = JSON.parse(data);
    }
}

module.exports = CareerManager;