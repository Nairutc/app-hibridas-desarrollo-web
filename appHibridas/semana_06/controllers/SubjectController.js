import Subject from '../models/subjectModel.js';
import Career from '../models/careerModel.js';

class SubjectController {
    async getAll(req, res)  {
    try{
        const subjects = await Subject
                                    .find()
                                    .populate('career', 'name');
        res.json({ 
            message: 'Success', 
            data: subjects 
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener materias'
        })
    }
    }

    async getById(req, res) {
    try{
        const id =req.params.id;
        const subjects = await Subject
                                .findById(id)
                                .populate('career', 'name');
        if(!subjects){
        return res.status(404).json({ 
                message: 'Materia no encontrada'
            });
        }
        res.json({ 
            message: 'Success', 
            data: subjects 
        }); 
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener la materia'
        })
    }
    }

    async create(req, res)  {
    try{
        const { name, semester, hours, career} = req.body;
        if (!name || !semester || !hours) {
            return res.status(403).send("faltan parámetros");
        }

        const careerExists = await Career.findById(career);
        if(!careerExists){
            return res.status(404).json({   
                message: 'Carrera no encontrada'
            });
        } 

        const subject = await Subject.create({ name, semester, hours, career });

        res.json({ 
            message: 'Success', 
            data: subject
        });
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ 
            message: `Error al crear la materia - ${err.message}`
        })
    }

    }

    async update(req, res)  {
    try{
        const id = req.params.id;

        const { name, semester, hours, active, modality } = req.body;
        if (!name || !semester || !hours || !active || !modality) {
            return res.status(403).send("faltan parámetros");
        }

        const subject = await Subject.findByIdAndUpdate(id, { name, semester, hours, active, modality },
            { new: true, runValidators: true });
        
        res.json({ 
            message: 'Success', 
            data: subject
        });
    }
    catch(err){
        res.status(500).json({ 
            message: `Error al actualizar la materia - ${err.message}`
        })
    }
    }

    async delete(req, res)  {
    try{
        const id = req.params.id;

        const subjects = await Subject.findByIdAndDelete(id);
        if(!subjects){
            return res.status(404).json({ 
                message: 'Materia no encontrada'
            });
        }
        res.json({ 
            message: 'Success', 
            data: subjects 
        });
    }
    catch(err){
        res.status(500).json({ 
            message: `Error al eliminar la materia - ${err.message}`
        })
    }
    }
    
    
}

export default new SubjectController();
