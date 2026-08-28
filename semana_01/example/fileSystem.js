const fs = require('fs');
const os = require('os');

console.log('Plataforma: ', os.platform());
console.log('CPUS: ', os.cpus().length);

const path = "notas.txt";
console.log("inicio del script");
const texto = "la nota fue modificada";

//leemos el archivo de manera asincorina 
fs.readFile(path, 'utf-8', (err, data) => {

    if(err) {
        console.error("Error al leer el archivo:", err);
        return;
    }
    console.log(data);

    //escribimos el archivo de manera asincronica
fs.writeFile(path, texto, (err) => {
        if(err) {
                console.error("Error al leer el archivo:", err);
                return;
        }
    })
});

//leemos un Json

const data = fs.readFileSync('data.json', 'utf-8');
const jsonLeido = JSON.parse(data);

const nvoJson = {nombre: 'Juan', apellido:'Moreno', edad: 30};
const jsonString = JSON.stringify(nvoJson, null, 2);

fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
    if(err){
        console.error("Error al escribir el archivo:", err);
        return;
    }
    console.log("Archivo escrito correctamente");
});

console.log(typeof(jsonLeido), jsonLeido);

console.log("fin del script");

/* 
Recomendada, manera sincronica de leer y escribir archivos, pero bloquea el hilo de la ejecucion.

const data = fs.readFileSync(path, 'utf-8');

console.log(data);


fs.writeFileSync(path, texto);
*/
