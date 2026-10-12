import Enrollment from '../models/enrrollmentModel.js';
import Users from '../models/userModel.js';
import Commission from '../models/commissionModel.js';

class EnrrollmentController {
    async getAll(req, res) {
        try {
            const enrollments = await Enrollment.find()
                .populate('student', 'name email')
                .populate('commission', 'name modality');

            return res.json({ message: 'Success', data: enrollments });
        } catch (err) {
            return res.status(500).json({
                message: `Error al obtener las inscripciones - ${err.message}`
            });
        }
    }

    async getById(req, res) {
        try {
            const enrollment = await Enrollment.findById(req.params.id)
                .populate({
                    path:'commission',
                    populate: {
                        path: 'subject'
                    }
                });

            if (!enrollment) {
                return res.status(404).json({
                    message: 'Inscripción no encontrada'
                });
            }

            return res.json({ message: 'Success', data: enrollment });
        } catch (err) {
            return res.status(500).json({
                message: `Error al obtener la inscripción - ${err.message}`
            });
        }
    }

    async create(req, res) {
        try {
            const { student, commission, active } = req.body;

            if (!student || !commission) {
                return res.status(400).json({
                    message: 'El alumno y la comisión son obligatorios'
                });
            }

            const studentExists = await Users.findById(student);
            if (!studentExists) {
                return res.status(404).json({ message: 'Alumno no encontrado' });
            }

            const commissionExists = await Commission.findById(commission);
            if (!commissionExists) {
                return res.status(404).json({ message: 'Comisión no encontrada' });
            }

            const exists = await Enrollment.findOne({ student, commission });
            if (exists) {
                return res.status(409).json({
                    message: 'El alumno ya tiene una inscripción en esta comisión'
                });
            }

            const enrollment = await Enrollment.create({
                student,
                commission,
                active
            });

            return res.status(201).json({
                message: 'Inscripción creada',
                data: enrollment
            });
        } catch (err) {
            return res.status(500).json({
                message: `Error al crear la inscripción - ${err.message}`
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { student, commission, active } = req.body;

            if (!student || !commission) {
                return res.status(400).json({
                    message: 'El alumno y la comisión son obligatorios'
                });
            }

            const studentExists = await Users.findById(student);
            if (!studentExists) {
                return res.status(404).json({ message: 'Alumno no encontrado' });
            }

            const commissionExists = await Commission.findById(commission);
            if (!commissionExists) {
                return res.status(404).json({ message: 'Comisión no encontrada' });
            }

            const exists = await Enrollment.findOne({
                student,
                commission,
                _id: { $ne: id }
            });

            if (exists) {
                return res.status(409).json({
                    message: 'El alumno ya tiene una inscripción en esta comisión'
                });
            }

            const enrollment = await Enrollment.findByIdAndUpdate(
                id,
                { student, commission, active },
                { new: true, runValidators: true }
            );

            if (!enrollment) {
                return res.status(404).json({
                    message: 'Inscripción no encontrada'
                });
            }

            return res.json({ message: 'Success', data: enrollment });
        } catch (err) {
            return res.status(500).json({
                message: `Error al actualizar la inscripción - ${err.message}`
            });
        }
    }

    async delete(req, res) {
        try {
            const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

            if (!enrollment) {
                return res.status(404).json({
                    message: 'Inscripción no encontrada'
                });
            }

            return res.json({ message: 'Success', data: enrollment });
        } catch (err) {
            return res.status(500).json({
                message: `Error al eliminar la inscripción - ${err.message}`
            });
        }
    }
}

export default new EnrrollmentController();