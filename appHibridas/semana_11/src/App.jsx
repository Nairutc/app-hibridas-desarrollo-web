import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { obternerCarreras, iniciarSesion, registrarUsuario } from './service/api.js'

function App() {
  const [error, setError ] = useState('');
  const [ careers, setCareers ] = useState( [] );

//estados para el formulario de registro
const [ user, setUser ] = useState({
                                          name:'', 
                                          email:'', 
                                          password:'',
                                          confirmPassword:''
                                        });

async function hundleSubmitRegister(event) {
    event.preventDefault();
    
    if(user.password !== user.confirmPassword){

      setError('las contraseñas no coinciden');
      return;
    }
    console.log(user);

    try {
      const result = await registrarUsuario( user.name, user.email, user.password );
      setMensaje('Usuario registrado correctamente');
      setUser({name:'', email:'',password:'', confirmPassword:''})
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false)
    }
  }

function hundleChange(event) {
    event.preventDefault();
    const {name, value}= event.target;
    setUser({...user, [name]:value});
  }

//estados para el formulario de inicio de sesion
  const [ mensaje, setMensaje] = useState('Soy un mensaje');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ token, setToken ] = useState('');
  const [ cargando, setCargando ] = useState(false);

  async function hundleSubmitLogin(event) {
    event.preventDefault();
    setCargando(true);
    setMensaje('');

    try {
      const result = await iniciarSesion( email, password );
      console.log( result );
      setMensaje(result);
      //guardamos el token en un estado o contexto 
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
      <h1> Frontend </h1>
      <h2> Fetch API del tipo GET & POST </h2>
      <h3> Formulario de Login </h3>

      <form onSubmit={hundleSubmitLogin} >
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

      <h3> Formulario de Registro </h3>

      <form onSubmit={hundleSubmitRegister} >
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" value={user.name} onChange={hundleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={user.email} onChange={hundleChange} />

      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" value={user.password} onChange={hundleChange} />

      <label htmlFor="confirmPassword">Repetir contraseña</label>
      <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={hundleChange} />

      <button type="submit">Registrarme</button>
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
