const nombre = "Nairut";
console.log('Hola, ' + nombre + '! Bienvenido a la semana 1 de app hibridas.');

//objeto

const persona ={
    nombre: "Nairut",
    email: "nairutc@gmail.com",
    edad:34,
    ciudad: "Caracas",
    mostrarCiudad(){
        console.log('la ciudad es: ' + this.ciudad); //this hace referencia a este objeto
    }
    
/* mostrarCiudad: function(){
        console.log('la ciudad es: ' + this.ciudad);
    }
*/    
}

persona.edad = 35;
persona.mostrarCiudad();

console.log('su nombre es: ' + persona.nombre + ' su email es: ' + persona.email);
console.table(persona);
