const CareerManager = require ('./CareerManager');

const manager = new CareerManager();
//manager.addSubject({id:1, name:'Programación', semester:1, hours:2});
//manager.addSubject({id:2, name:'Matemáticas', semester:1, hours:3});
//manager.addSubject({id:3, name:'PWA', semester:3, hours:2});
//manager.addSubject({id:4, name:'Proyecto final', semester:4, hours:4});
manager.addSubject({id:5, name:'Etica', semester:4, hours:2});

const materias = manager.getSubjects();
console.table(materias);

const materia = manager.getSubjectById(3);
console.log('materia encontrada: ', materia);

