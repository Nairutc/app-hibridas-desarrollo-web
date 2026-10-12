import mongoose from 'mongoose';

const commissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la comisión es obligatorio'],
        trim: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: [true, 'La materia es obligatoria']
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El profesor es obligatorio']
    },
    modality: {
        type: String,
        enum: ['presencial' , 'virtual'],
        default: 'presencial'
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Commission = mongoose.model('Commission', commissionSchema);

export default Commission;