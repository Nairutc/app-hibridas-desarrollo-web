import Subject from '../models/subjectModel.js';

class SubjectController {
    async getAll(req, res)  {
    try{
        const subjects = await Subject.find();
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
        const subjects = await Subject.findById(id);
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
        const { name, semester, hours } = req.body;
        if (!name || !semester || !hours) {
            return res.status(403).send("faltan parámetros");
        }
        const subject = await Subject.create({ name, semester, hours });
    
        res.json({ 
            message: 'Success', 
            data: subject
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ 
            message: 'Error al crear la materia'
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

        const subject = await Subject.findByIdAndUpdate(id, { name, semester, hours, active, modality }, { new: true });
        
        res.json({ 
            message: 'Success', 
            data: subject
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al actualizar la materia'
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
            message: 'Error al eliminar la materia'
        })
    }
    }
    
    
}

export default new SubjectController();
