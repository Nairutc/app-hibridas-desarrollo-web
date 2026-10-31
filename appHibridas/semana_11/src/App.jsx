import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obternerCarreras, iniciarSesion } from './service/api.js'

function App() {
  const [error, setError ] = useState('');
  const [ careers, setCareers ] = useState( [] );


//estados para el formulario 
  const [ mensaje, setMensaje] = useState('Soy un mensaje');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ token, setToken ] = useState('');
  const [ cargando, setCargando ] = useState(false);

  async function hundleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    setCargando(true);
    setMensaje('');

    try {
      const result = await iniciarSesion( email, password );
      console.log( result );
      setMensaje(result);
    } catch (error) {
      setMensaje(error.message);
      console.error(error.message);
    } finally {
      setCargando(false)
    }
  }

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
      <h2> Fetch API del tipo GET & POST </h2>
      <h3> Formulario de Login </h3>

      <form onSubmit={hundleSubmit} >
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        required
        />

        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)}
        required
        />

        <button disabled={cargando} type="submit">{cargando ? 'Ingresando' : 'Ingresar'}</button>
      </form>

      <p>{mensaje}</p>

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
