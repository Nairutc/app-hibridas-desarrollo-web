import fs from "fs/promises";

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
    return user.id;
    }
    getUsers() {
    return this.users;
    }
    getUserById(id) {
    const user = this.users.find((user) => user.id === id); 
    return user;
    }
    upadateUser(id,user){
    const index = this.users.findIndex((user) => user.id === id); 
    if( index === -1 ) {
        console.error("Not found");
        return user;
    }
    if (user.name){
        this.users[index].name = user.name;
    }
    if (user.email){
        this.users[index].email = user.email;
    }
    if (user.password){
        this.users[index].password = user.password;
    }
        this.saveUsers()
    }
    deleteUserById(id) {
    const index = this.users.findIndex((user) => user.id === id); 
    if( index === -1 ) {
        console.error("No se encontró el usuario con id: " + id);
        return 'Not Found';
    }
    this.users.splice(index,1);
    this.saveUsers();
    return 'ok';
    }
    async saveUsers(){
        const data = JSON.stringify( this.users, null, 2);
        await fs.writeFile(this.path, data , 'utf-8');
    }
    async loadUsers(){
        //validamos que el archivo existe
        // if ( !fs.existsSync(this.path) ){
        //     this.users = [];
        //     return;
        // }

    const data = await fs.readFile(this.path, { encoding:'utf-8' })
    this.users = JSON.parse( data );
    
    }
}

export default Users;