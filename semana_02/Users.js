import fs from "fs";

class Users {
    subjects = [];

    constructor() {
    console.log("Hola desde el constructor");
    this.users = [];
    this.path = "./data/users.json";
    //al iniciar leemos lo que esta en el Json local
    this.loadUsers();
    }
    addUser(user) {
    if ( !user.name || !user.email || !user.password ) {
        console.error("Faltan parámetros para agregar el usuario");
        return;
    }
    const id = crypto.randomUUID();
    user.id = id;
    this.users.push(user);
    //escribimos en el disco
    this.saveUsers();
    return user;
    }

    getUsers() {
    return this.users;
    }

    saveUsers(){
        const data = JSON.stringify( this.users, null, 2);
        fs.writeFileSync(this.path, data , 'utf-8');
    }

    loadUsers(){
        //validamos que el archivo existe
        if ( !fs.existsSync(this.path) ){
            this.users = [];
            return;
        }
        const data = fs.readFileSync(this.path, 'utf-8');
        this.users = JSON.parse(data);
    }
}

export default Users;