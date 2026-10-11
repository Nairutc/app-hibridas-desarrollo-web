import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
    name:{ 
        type:String, 
        required:[true,'El nombre de la materia es obligatorio'],
        trim:true,
        minlength:[3,'El nombre de la materia debe tener al menos 3 caracteres'],
        maxlength:[30,'El nombre de la materia no puede exceder de 30 caracteres']
    },
    semester:{ 
        type:Number, 
        required:[true,'El semestre es obligatorio'],
        min:[1,'El semestre debe ser al menos 1'],
        max:[6,'El semestre no puede exceder de 10']
    },
    hours:{
        type:Number,
        default:2,
        required:[true,'Las horas son obligatorias'],
        min:[1,'El número de horas debe ser al menos 1'],
        max:[6,'El número de horas no puede exceder de 6']
    }, 
    active:{ 
        type:Boolean, 
        default:true
    },
    modality:{
        type:String,
        enum:['Presencial','Virtual'],
        default:'Presencial'
    },
    career:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Career',
        required:[true,'La carrera es obligatoria']
    },
    createdAt:{ 
        type:Date, 
        default:Date.now
    }

    });

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;