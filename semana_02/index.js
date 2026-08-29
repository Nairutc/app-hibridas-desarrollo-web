import express from "express"
import chalk from "chalk";
import users from "./Users.js";
const gestor = new users();

const app = express();
const port = 3000;
let count = 0;

app.get('/', (request, response) => {
    count++;
    console.log(chalk.yellow(`Se ha recibido una petición GET por el cliente N: ${count}`));
    response.send(`<h1>Hola desde Express</h1> 
                    <p>Usted es el cliente N: ${count} </p>
                        <ul>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/subjects">Listado de Materias</a>
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

app.get('/contacto', (request, response) => {
    console.log(chalk.yellow("Se ha recibido una petición GET en la ruta /Contacto"));
    response.send('<h1>Contacto</h1> <p>Esta es la página de contacto</p>');
});

app.get('/api/users', (request, response) => {
    const data = gestor.getUsers();
    response.json(data);
});

app.post('/api/users', (request, response) => {
    response.send(`<h1>Usuarios agregados correctamente</h1>`);
});

console.log(chalk.blue("Usuarios agregados correctamente"));

app.listen(port,() => {
    console.log(chalk.green(`Servidor corriendo en el puerto: http://localhost:${port}`));
})