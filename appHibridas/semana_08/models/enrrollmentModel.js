import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'El alumno es obligatorio']
    },
    commission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commission',
        required: [true, 'La comisión es obligatoria']
    },
    enrrollmentDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'cancelled'],
        default: 'active'
    }
    
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;