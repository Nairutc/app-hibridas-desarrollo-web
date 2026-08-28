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
    response.send('Hola desde Express, eres el cliente N: ' + count);
})

console.log(chalk.blue("Usuarios agregados correctamente"));

app.listen(port,() => {
    console.log(chalk.green(`Servidor corriendo en el puerto: http://localhost:${port}`));
})