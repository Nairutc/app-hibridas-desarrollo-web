import heroImg from './assets/hero.png';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Alert from './components/Alert';


import './App.css'

function App(){

  function saludar(){
    console.log('Hola soy el componente padre');
  }

  const name = 'Aplicación Educativa';
  const subjects = [
    { id:1, name:'Lógica de Programación' },
    { id:2, name:'Maquetado y Desarrollo Web'},
    { id:3, name:'Diseño Gráfico'}
  ];

  let logueado = true;
  //const mensaje = logueado  ? <h4> Bienvenido </h4> : <h4 className='alert'>Acceso Restringido</h4>;

  return (

    <>


    <Header titulo = {name} description = "Sistema de Gestión"/>
    
  { logueado ? <Dashboard subjects = { subjects } fn = {saludar}/> :  <main> <Alert/> </main> }

    <Footer/>

    </>
  )
}   
    

export default App
