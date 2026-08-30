import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import routerAPI from './routes/index.js'

dotenv.config();

const app = express();

app.use(express.urlencoded() );
app.use(express.json() );
app.use(express.static('public') );

//app.use(miMiddleware);
const port = process.env.PORT;
let count = 0;
app.get('/', (request, response) => {
    count++;
    console.log(chalk.yellow(`Se ha recibido una petición GET por el cliente N: ${count}`));
    response.send(`<h1>Hola desde Express</h1> 
                    <p>Usted es el cliente N: ${count} </p>
                        
        `);
})

routerAPI(app);

console.log(chalk.blue("Usuarios agregados correctamente"));

//explicacion

// console.log('inicio');

// setTimeout( () => { console.log ( "lectura del JSON" ) }, 2000)

// console.log('fin');



app.listen(port,() => {
    console.log(chalk.green(`Servidor corriendo en el puerto: http://localhost:${port}`));
})