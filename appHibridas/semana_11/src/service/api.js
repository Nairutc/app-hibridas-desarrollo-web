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



export async function iniciarSesion() {

}