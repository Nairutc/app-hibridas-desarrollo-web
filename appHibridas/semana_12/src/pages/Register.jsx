import { useState, useEffect } from 'react';
import { registrarUsuario } from '../service/api';
import { useNavigate } from 'react-router-dom';

function Register() {
        const [error, setError ] = useState('');
        const [ mensaje, setMensaje] = useState('');

        const navigate = useNavigate();
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
                navigate('/login')
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

    return (
        <>
        <h1>Page Register</h1>

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

            <p>{mensaje}</p>
            <p>{error}</p>
        </form>
        </>
    );
}

export default Register;