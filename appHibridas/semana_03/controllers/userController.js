import bcrypt from "bcrypt";
//importa el modelo 
import Users from "../models/Users.js";


const gestor = new Users();

const getUsers = (req, res) => {
    const data = gestor.getUsers();
    res.json( { message: 'success', data: data});
};
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = gestor.getUserById(id);
    if ( !user ){
        res.status(404).json({ message: 'Not Found', data:{} });
        return;
    }
    res.status(200).json( { message: "success" , data:user} );
};
const postUser = async (req, res) => {
    const body = req.body;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return res.status(403).send("faltan parámetros");
    }
    console.log(name, email, password);
        //hasheamos la contraseña y esperamos
    const passwordHash = await bcrypt.hash(password, 10);
    const id = gestor.addUser({
        name,
        email,
        password: passwordHash
    });
    res.send(`<h1>Usuario Registrado correctamente con el id ${id} </h1>`);
};
const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log( {id} );
    const status = gestor.deleteUserById(id);
    if ( status == 'Not Found' ){
        res.status(404).json({ message: 'Not Found', data:{} });
        return;
    }
    res.status(200).json( { message: "success" , data: {} } );
};

export { getUsers, getUserById, postUser, deleteUser };
