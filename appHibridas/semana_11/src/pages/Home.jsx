import { useState, useEffect } from 'react'
import { obternerCarreras } from '../service/api.js'

function Home() {

    const [error, setError ] = useState('');
    const [ careers, setCareers ] = useState( [] );

useEffect( () => {
    async function getCareers(){
            try {
                    const result = await obternerCarreras();
                    setCareers(result.data);
            } catch (error) {
                    console.log(error);
                    setError('no pudimos setear las carreras')
            }
                    
            }
            getCareers();
            }, [] );

    return (
        <>
        <h1>Page Home</h1>

        <h3> Listado de carreras </h3>
        <p>{error}</p>
            <ul>
                {
                    careers.map( career => 
                                <li key={career._id}>{career.name}</li>
                                )
                }
            </ul>
        </>
    );
}

export default Home;