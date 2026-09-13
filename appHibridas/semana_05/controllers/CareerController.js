import Career from '../models/careerModel.js';
import Subject from '../models/subjectModel.js';

class CareerController {
    async getAll(req, res)  {
    try{
        const careers = await Career.find();
        res.json({ 
            message: 'Success',
            data: careers
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener carreras'
        })
    }
    }

    async getSubjectByCareer(req, res) {
    try{
        const subjectId =req.params.subjectId;
        const subjects = await Subject.find({ career: subjectId });

        res.json({ 
                message: 'Materias no encontradas',
                data: subjects
        });
    }                               
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener las materias de la carrera'
        })
    }
    }

    async create(req, res)  {
    try{
        const { name, duration } = req.body;
        const career = await Career.create({ name, duration });
        res.status(201).json({ 
            message: 'Success',
            data: career
        });
    }
    catch(err){
        res.status(500).json({ 
            message: `Error al crear la carrera - ${err.message}`
        })
    }
    }   

    async update(req, res)  {
    try{
        const id = req.params.id;
        const { name, duration } = req.body;
        const career = await Career.findByIdAndUpdate(id, { name, duration }, { new: true });
        if(!career){
            return res.status(404).json({ 
                message: 'Carrera no encontrada'
            });
        }
        res.json({ 
            message: 'Success',
            data: career
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al actualizar la carrera'
        })
    }
    }

    async delete(req, res)  {
    try{
        const id = req.params.id;
        const career = await Career.findByIdAndDelete(id);
        if(!career){
            return res.status(404).json({
                message: 'Carrera no encontrada'
            });
        }
        res.json({
            message: 'Success',
            data: career
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al eliminar la carrera'
        })
    }
    }
}

export default CareerController;
