import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obternerCarreras } from './service/api.js'

function App() {
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
                      } finally {

                      }
                      
                    }
                      getCareers();
                    }, [] );
  
  

  return (
    <>
      <h1> Fronend </h1>
      <h2> Fetch API </h2>
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
  )
}

export default App
