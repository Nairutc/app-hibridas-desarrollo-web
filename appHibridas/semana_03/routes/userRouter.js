import express from 'express';
import { 
    getUsers, 
    getUserById, 
    postUser, 
    deleteUser 
    } 
from "../controllers/userController.js"

const router = express.Router();
;

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', postUser);

router.delete('/:id', deleteUser);

router.get('/contacto', (request, response) => {
    console.log(chalk.yellow("Se ha recibido una petición GET en la ruta /Contacto"));
    response.send('<h1>Contacto</h1> <p>Esta es la página de contacto</p>');
});

router.get('/register', (request, response) => {
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

export default router;