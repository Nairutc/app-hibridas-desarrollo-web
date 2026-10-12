import Commission from '../models/commissionModel.js';
import Subject from '../models/subjectModel.js';
import Users from '../models/userModel.js';

class CommissionController {
    async getAll(req, res) {
        try {
            const commissions = await Commission.find()
                .populate('subject', 'name semester')
                .populate('teacher', 'name email');

            return res.json({ message: 'Success', data: commissions });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: `Error al obtener las comisiones - ${err.message}`
            });
        }
    }

    async getById(req, res) {
        try {
            const commission = await Commission.findById(req.params.id)
                .populate({
                    path:'subject',
                    populate:{
                                path: 'career',
                            }
                })
                .populate('teacher', 'name email');

            if (!commission) {
                return res.status(404).json({ message: 'Comisión no encontrada' });
            }

            return res.json({ message: 'Success', data: commission });
        } catch (err) {
            return res.status(500).json({
                message: `Error al obtener la comisión - ${err.message}`
            });
        }
    }

    async create(req, res) {
        try {
            const data =  req.body;
            const commission = await Commission.create(data);

            return res.status(201).json({ message: 'Success', data: commission });
        } catch (err) {
            return res.status(500).json({
                message: `Error al crear la comisión - ${err.message}`
            });
        }
    }

    async update(req, res) {
        try {
            const { name, subject, teacher, modality, active } = req.body;

            if (!name || !subject || !teacher) {
                return res.status(400).json({ message: 'Faltan parámetros' });
            }

            const subjectExists = await Subject.findById(subject);
            if (!subjectExists) {
                return res.status(404).json({ message: 'Materia no encontrada' });
            }

            const teacherExists = await Users.findById(teacher);
            if (!teacherExists) {
                return res.status(404).json({ message: 'Profesor no encontrado' });
            }

            if (teacherExists.role !== 'teacher') {
                return res.status(400).json({ message: 'El usuario no es profesor' });
            }

            const commission = await Commission.findByIdAndUpdate(
                req.params.id,
                { name, subject, teacher, modality, active },
                { new: true, runValidators: true }
            );

            if (!commission) {
                return res.status(404).json({ message: 'Comisión no encontrada' });
            }

            return res.json({ message: 'Success', data: commission });
        } catch (err) {
            return res.status(500).json({
                message: `Error al actualizar la comisión - ${err.message}`
            });
        }
    }

    async delete(req, res) {
        try {
            const commission = await Commission.findByIdAndDelete(req.params.id);

            if (!commission) {
                return res.status(404).json({ message: 'Comisión no encontrada' });
            }

            return res.json({ message: 'Success', data: commission });
        } catch (err) {
            return res.status(500).json({
                message: `Error al eliminar la comisión - ${err.message}`
            });
        }
    }
}

export default new CommissionController();