class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (!product.id || !product.name || !product.description || !product.price || !product.stock) {
        console.log("Error: faltan campos obligatorios");
        return;
        }

        const exists = this.products.find((p) => p.id === product.id);

        if (exists) {
        console.log("Error: el id ya existe");
        return;
        }

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);

        if (!product) {
        console.log("Not found");
        return;
        }

        return product;
    }   
    }

module.exports = ProductManager;