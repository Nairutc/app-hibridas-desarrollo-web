import heroImg from './assets/hero.png';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Alert from './components/Alert';

import { useState } from 'react';


import './App.css'

function App(){
  const [ logueado, setLogueado ] = useState(true);
  function saludar(){
    console.log('Hola soy el componente padre');
  }

  const name = 'Aplicación Educativa';

  function iniciar(){
    alert('Iniciando Sesión');
    setLogueado(true);
  }

  function salir(){
    alert('Cerrando Sesión');
    setLogueado(false);
  }

  const subjects = [
    { id:1, name:'Lógica de Programación' },
    { id:2, name:'Maquetado y Desarrollo Web'},
    { id:3, name:'Diseño Gráfico'}
  ];


  //const mensaje = logueado  ? <h4> Bienvenido </h4> : <h4 className='alert'>Acceso Restringido</h4>;

  return (

    <>


    <Header titulo = {name} description = "Sistema de Gestión"/>
      <hr/>
        <div>
          <button onClick={iniciar} type='button'> Iniciar Sesión </button>
          <button onClick={salir} type='button'> Cerrar Sesión </button>
        </div>
      <hr/>
  { logueado ? <Dashboard subjects = { subjects } fn = {saludar}/> :  <main> <Alert msg='Acceso No Permitido'/> </main> }


    <Footer/>

    </>
  )
}   
    

export default App
