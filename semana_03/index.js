import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import chalk from "chalk";
import users from "./Users.js";

dotenv.config();

const gestor = new users();

const app = express();
app.use(express.urlencoded() );
const port = process.env.PORT;
let count = 0;

app.get('/', (request, response) => {
    count++;
    console.log(chalk.yellow(`Se ha recibido una petición GET por el cliente N: ${count}`));
    response.send(`<h1>Hola desde Express</h1> 
                    <p>Usted es el cliente N: ${count} </p>
                        <ul>
                        <li>
                            <a href="/register">Registro</a>
                        </li>
                        <li>
                            <a href="/subjects">Listado de Materias</a>
                        </li>
                        <li>
                            <a href="api/users">Listado de Usuarios</a>
                        </li>
                        <li>
                            <a href="/contacto">Contacto</a>
                        </li>
                        </ul>
        `);
})

app.get('/subjects', (request, response) => {
    console.log(chalk.yellow("Se ha recibido una petición GET en la ruta /Materias"));
    response.send('<h1>Listado de materias</h1> <p>Esta es la página de las asignaturas</p>');
});

app.get('/register', (request, response) => {
    response.send(`<!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Registro</title>
            </head>
            <body>
                <form action ="/api/users" method="post" enctype=aplication/x-www-form-urlendcoded>
                    <label for="name">Nombre</label>
                    <input id="name" name="name" type = "text">

                    <label for="email">Email</label>
                    <input id= "email" name="email" type = "text">

                    <label for="password">Contraseña</label>
                    <input id= "password" name="password" type = "password">

                    <button type="submit">Registrarme</button>
                </form>
                
            </body>
            </html>`
        );
});


app.get('/contacto', (request, response) => {
    console.log(chalk.yellow("Se ha recibido una petición GET en la ruta /Contacto"));
    response.send('<h1>Contacto</h1> <p>Esta es la página de contacto</p>');
});

app.get('/api/users', (request, response) => {
    const data = gestor.getUsers();
    response.json(data);
});

app.get('/api/users/:id', (request, response) => {
    const { id } = request.params;
    console.log( {id} );
    const user = gestor.getUserById(id);
    if ( !user ){
        response.status(404).json({ message: 'Not Found', data:{} });
        return;
    }
    response.status(200).json( { message: "success" , data:user} );
});

app.delete('/api/users/:id', (request, response) => {
    const { id } = request.params;
    console.log( {id} );
    const status = gestor.deleteUserById(id);
    if ( status == 'Not Found' ){
        response.status(404).json({ message: 'Not Found', data:{} });
        return;
    }
    response.status(200).json( { message: "success" , data: {} } );
});

app.post('/api/users', async (request, response) => {
    const body = request.body;
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return response.status(403).send("faltan parámetros");
    }
    console.log(name, email, password);
        //hasheamos la contraseña y esperamos
    const passwordHash = await bcrypt.hash(password, 10);
    const id = gestor.addUser({
        name,
        email,
        password: passwordHash
    });
    response.send(`<h1>Usuario Registrado correctamente con el id ${id} </h1>`);
});

console.log(chalk.blue("Usuarios agregados correctamente"));

//explicacion

// console.log('inicio');

// setTimeout( () => { console.log ( "lectura del JSON" ) }, 2000)

// console.log('fin');



app.listen(port,() => {
    console.log(chalk.green(`Servidor corriendo en el puerto: http://localhost:${port}`));
})