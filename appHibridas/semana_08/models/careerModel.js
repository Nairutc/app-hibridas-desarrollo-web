import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    name:{ 
        type:String, 
        required:[true,'El nombre de la carrera es obligatorio'],
        trim:true,
        minlength:[3,'El nombre de la carrera debe tener al menos 3 caracteres'],
        maxlength:[50,'El nombre de la carrera no puede exceder de 50 caracteres']
    },
    duration:{
        type:Number,
        required:[true,'La duración es obligatoria'],
        min:[1,'La duración debe ser al menos 1'],
        max:[3,'La duración no puede exceder de 3']
    },
    active:{ 
        type:Boolean, 
        default:true
    }
    });

const Career = mongoose.model('Career', careerSchema);

export default Career;