import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function Login() {

    const [error, setError ] = useState('');
    //estados para el formulario de inicio de sesion
    const [ mensaje, setMensaje] = useState('Soy un mensaje');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cargando, setCargando ] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function hundleSubmitLogin(event) {
        event.preventDefault();
        setCargando(true);
        setMensaje('');
    
        try {
            //guardamos el token en un  contexto 
            await login(email, password);
                navigate('/'); 
            } catch (error) {
                setMensaje(error.message);
                console.error(error.message);
            } finally {
                setCargando(false)
            }
        }

    return (
        <>
        <h1>Page Login</h1>

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

        <p>{mensaje}</p>
        <p>{error}</p>
        </>
    );
}

export default Login;