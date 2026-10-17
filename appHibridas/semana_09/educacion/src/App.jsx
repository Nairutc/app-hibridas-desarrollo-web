
import reactLogo from './assets/react.svg'
import './App.css'
function normalizar(text){

  const norm = text.trim().toUpperCase();

  return norm;

}

function App() {
  const nombre = 'Nairut   ';
  let logueado = true;
  const edad = 35;
  const titulo = <h1>Plataforma Educativa</h1>;
  const description = <p>Sistema de gestión educativa para alumnos</p>;
  const msg = <div className='alert-error'> Acceso No Permitido </div>
  const logo = {
    url: reactLogo,
    width: 64,
    description:'logo de React',
    title:'Logo de React'
  }

  return (
    <>
      <hr/>
      {
            logueado  ? 
                        <> {titulo} {description} </>
                      :  
                        <>  {msg} </>
      } 
      <hr/>
      <p className='text-green'> El usuario logueado es { normalizar(nombre) } </p>
      <hr/>
      {
        logueado  ?
                ( 
                  <img 
                  src={logo.url}
                  width={logo.width} 
                  alt={logo.description} 
                  />
                )
                  :
                <></>
        
      }
    
    </>
  )
}

export default App