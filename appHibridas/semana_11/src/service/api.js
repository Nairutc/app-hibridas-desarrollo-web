const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

export async function obternerCarreras() {
    const response = await fetch(`${API_URL}/api/careers`);
    console.log(response);

    if (!response.ok){
        throw new Error("No se puedo obtener las carreras");
    }

    return response.json()
}



export async function iniciarSesion(email, password) {

    const response = await fetch(`${API_URL}/api/auth/login`, 
                                {
                                    method:'POST',
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify({email, password})
                                }
                                );
                                const data = await response.json()

    if (!response.ok){
        throw new Error("No se puedo iniciar sesión");
    }

    return data

}

export async function registrarUsuario( name, email, password ) {
    const response =  await fetch(`${API_URL}/api/auth/register`, 
                                {
                                    method:'POST',
                                    headers:{
                                        'Content-Type':'application/json'
                                    },
                                    body:JSON.stringify({name, email, password})
                                }
                                );
                                const data = await response.json()

    if (!response.ok){
        throw new Error("No se puedo realizar el registro");
    }

    return data;
}