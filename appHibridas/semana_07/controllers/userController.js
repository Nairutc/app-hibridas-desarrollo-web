import bcrypt from "bcrypt";
//importa el modelo 
import Users from "../models/userModel.js";

class UserController {
    async getAll(req, res)  {
    try{
        const data = await Users.find().select('name email role');
        res.json( { message: 'success', data: data});
        console.log(req.user)
        res.json({ 
            message: 'Success', 
            data: subjects 
        });
    }
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener usuarios'
        })
    console.error(error);
    }
    }

    async getById(req, res) {
    try{
        const { id } = req.params;
        const user = await Users.findById(id).select('-password');
        if ( !user ){
            res.status(404).json({ message: 'Not Found', data:{} });
            return;
        }
        res.status(200).json( { message: "success" , data:user} );
        }
    catch(err){
        res.status(500).json({ 
            message: 'Error al obtener el usuario'
        })
    }
    }

    async create(req, res)  {
        try{
            const body = req.body;
            const { name, email, password, role } = body;

            if (!name || !email || !password) {
                return res.status(403).send("faltan parámetros");
            }
                //verificamos que el email del usuario no esté registrado

                const userExists =  await Users.findOne({ email : email });

                if (!userExists){
                    return res.status(409).send("El usuario ya existe"); 
                }

                //hasheamos la contraseña y esperamos
                const passwordHash = await bcrypt.hash(password, 10);
                const newUser = await Users.create({
                    name,
                    email,
                    password: passwordHash,
                    role: role || 'user'
            });

            const id = newUser._id;    
            res.json( {message:`Usuario Registrado correctamente con el id: ${id}`});
            }
        catch(err){
            console.error(err.message);
            res.status(500).json({ 
                message: `Error al crear el usuario - ${err.message}`
            })
    }

    }

    async update(req, res)  {
        try{
            const { id } = req.params;
            const { body } = req;
            const { name, email, password, role } = body;

            if (!name || !email || !password) {
                return res.status(403).send("faltan parámetros");
            }
            const data ={ 
                            name, 
                            email
                        }

            if (password){          
            data.password = await bcrypt.hash(password, 10);  
            }
            
            if (role){          
            data.role = role;  
            }

            const user = await Users.findByIdAndUpdate(id, data);
            user.save();
            res.status(200).json({ message: "success", data: user });
        }
        catch(err){
            console.error(error);
            res.status(500).json({ 
                message: `Error al actualizar el usuario - ${err.message}`
            })
        }
    }

    async delete(req, res)  {
    try{
        const { id } = req.params;
        const status = await Users.findByIdAndDelete(id);
        if ( status == 'Not Found' ){
        res.status(404).json({ message: 'Not Found', data:{} });
        return;
    }
    res.status(200).json( { message: "success" , data: {} } );
    }
    catch(err){
        res.status(500).json({ 
            message: `Error al eliminar el usuario - ${err.message}`
        })
    }
    }
    
}


export default UserController;
