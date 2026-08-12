const ProductManager = require("./ProductManager").default;

const manager = new ProductManager();

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