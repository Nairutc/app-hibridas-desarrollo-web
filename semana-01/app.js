const ProductManager = require("./ProductManager"); //Esto importa la clase ProductManager desde el archivo ProductManager.js.

const manager = new ProductManager(); //Acá creamos un objeto nuevo usando la clase. Cuando se ejecuta new ProductManager(), automáticamente se ejecuta el constructor() de la clase, entonces se crea:
//this.products = [];

    manager.addProduct({
    id: 1,
    name: "Notebook",
    description: "Notebook Lenovo",
    price: 1200,
    stock: 10,
    });

    manager.addProduct({
    id: 2,
    name: "Mouse",
    description: "Mouse inalambrico",
    price: 25,
    stock: 50,
    });

    console.log(manager.getProducts());

    console.log(manager.getProductById(1));

    console.log(manager.getProductById(99));