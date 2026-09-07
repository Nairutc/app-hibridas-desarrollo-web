import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from './config/db.js';
import routerAPI from './routes/index.js';


dotenv.config();

const app = express();

app.use(express.urlencoded() );
app.use(express.json() );
app.use(express.static('public') );

//app.use(miMiddleware);
const port = process.env.PORT;
connectDB();

app.get('/', (request, response) => {
    count++;
    console.log(chalk.yellow("cliente conectado"));
    response.send(`<h1>Hola desde Express</h1>
        `);
})

routerAPI(app);

app.listen(port,() => {
    console.log(chalk.green(`Servidor corriendo en el puerto: http://localhost:${port}`));
})