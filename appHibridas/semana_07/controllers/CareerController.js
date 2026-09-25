import Career from '../models/careerModel.js';
import Subject from '../models/subjectModel.js';

class CareerController {
    async getAll(req, res)  {
    try{
        const careers = await Career
                                .find()
                                .select('name duration');    
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

    async getById(req, res)  {
    try{
        const cid = req.params.cid;
        const career = await Career.findById(cid);
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
            message: 'Error al obtener carreras'
        })
    }
    }

    async getSubjectByCareer(req, res) {
    try{
        const careerId =req.params.careerId;
        const query = req.query.semester;

        console.log({query});

        const filter = { career: careerId };

        if (query) {
            filter.semester = query;
        }

        const subjects = await Subject
                                .find(filter)
                                .sort({ semester: 1 })
                                .populate('career');    

        res.json({ 
                message: 'Success',
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
        const id = req.params.careerId;
        const { name, duration } = req.body;
        if (!name || !duration ) {
            return res.status(403).send("faltan parámetros");
        }

        const career = await Career.findByIdAndUpdate(id, { name, duration }, { new: true, runValidators: true });
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
        const id = req.params.careerId;
        const subjects = await Subject.find({ career: id });
        if(subjects.length > 0){
            return res.status(400).json({
                message: 'No se puede eliminar la carrera porque tiene materias asociadas'
            });
        }
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
