class CareerManager{
    subjects = [];
    constructor(){
        console.log("Hola desde el cosntructor");
        this.subjects = [];
    }
    addSubject(subject){
        if(!subject.id || !subject.name || !subject.semester || !subject.hours){
            console.error('Faltan paarmetros para agregar la materia');
            return;
        }
        this.subjects.push(subject);
    }
    getSubjects(){
        return this.subjects;
    }
    getSubjectById(id){
        const subject = this.subjects.find(subject => subject.id === id);
        if(!subject){
            console.error('No se encontró la materia con el ID ' + id);
            return {};
        }
        return subject;
    }
}

const career = new CareerManager();
career.addSubject({id:1, name:'Programación', semester:1, hours:2});
career.addSubject({id:2, name:'Matemáticas', semester:1, hours:3});
career.addSubject({id:3, name:'PWA', semester:3, hours:2});
career.addSubject({id:4, name:'Proyecto final', semester:4, hours:4});

const materias = career.getSubjects();
console.table(materias);

const materia = career.getSubjectById(3);
console.log('materia encontrada: ', materia);
    