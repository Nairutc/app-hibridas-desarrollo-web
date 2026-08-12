class ProductManager {
    constructor() {
        this.products = []; //crea una lista vacia de productos 
    }

    addProduct(product) { // recibe un producto y lo agrega si cumple con las condiciones
        if (!product.id || !product.name || !product.description || !product.price || !product.stock) {
        console.log("Error: faltan campos obligatorios");
        return;
        }

        const exists = this.products.find((p) => p.id === product.id); //revisa si el id de produto ya existe en la lista de productos. si existe no lo agrega y si no existe lo agrega

        if (exists) {
        console.log("Error: el id ya existe");
        return; // si el id ya existe, no agrega el producto y termina la funcion
        }

        this.products.push(product); //agrega el producto a la lista de productos
        }

    getProducts() {
        return this.products;
    } //devuelve la lista de productos

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);//busca el producto por id en la lista de productos

        if (!product) {//si no encuentra el producto, devuelve un mensaje de error
        console.log("Not found");
        return;
        }

        return product;                 //si encuentra el producto, devuelve el producto
    }   
}

module.exports = ProductManager; // se exporta la clase ProductManager para poder usarla en otros archivos