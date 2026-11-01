import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'


function Nav(){

    const { user, autenticado, logout } = useAuth();
    const navigate = useNavigate();

    function cerrarSesion(){
        logout();
        navigate('/login')
    }

    return(


        <nav>
            {
                autenticado ? (
                <> 
                    <Link to='/'>Inicio</Link> | 
                    <Link to='/perfil'>Mi perfil</Link> |
                    <hr/>
                    <button onClick={cerrarSesion} >Cerrar sesión</button> 
                    <p>Hola! {user.name.toUpperCase()}</p>
                    
                </>
                ) : (
                <> 
                    <Link to='/login'>Iniciar Sesión</Link> | 
                    <Link to='/register'>Registrar</Link>
                </>
                )
            }
            
        </nav>

    )
}

export default Nav