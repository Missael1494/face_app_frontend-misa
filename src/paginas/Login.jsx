import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, Navigate } from 'react-router-dom'

// actions de redux 
import { loginUsuario } from '../actions/authActions';


const Login = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState('')
    

    const dispatch = useDispatch();

    const navigate = useNavigate();
    //const userId = useSelector(state => state.auth)

    const userInfo = useSelector(state => state.auth.userInfo);

        useEffect(() => {
            if(!userInfo || !userInfo._id) return;
            navigate('/userlog')
        

        }, [userInfo])

    const login = info => dispatch( loginUsuario(info))
    //console.log('userId', userId.loading)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hola')

        if(email.trim() === '' || password.trim() === '') {
            setAlerta('Ambos campos son obligatorios')
            // setTimeout(() => {
            //     setAlerta('')
            // }, 3000);
            return;
        }

        login({
            email,
            password
        })
        
    }

  return (
    <>
        <div className='flex space-x-10 items-center'>
            <h1 className='flex-1 text-2xl'><span className='text-sky-600 font-bold text-6xl block mb-5' >face-App </span>Face-App te ayuda a comunicarte y compartir con las personas que 
            forman parte de tu vida</h1>


            
            <form 
                action=""
                className='bg-white p-10 rounded-lg flex-1 '
                onSubmit={handleSubmit}
            >
                <div className=''>
                    <label htmlFor="username">Name or user</label>
                    <input
                        id='email' 
                        type="email" 
                        className='p-3 mt-3 mb-3 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                        placeholder='Correo o Nombre'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input
                        id='password' 
                        type="password" 
                        className='p-3 mt-3 mb-5 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                        placeholder='Correo o Nombre'
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>

                <div className='flex w-full mb-5'>
                    <input 
                        type="submit" 
                        className='bg-blue-500 text-white p-3 mx-auto rounded w-4/5 hover:bg-blue-600 transition-colors hover:cursor-pointer'
                        value="Login"    
                    />

                </div>

                <Link
                    className='block text-center text-sky-500 mb-5 hover:text-sky-600 transition-colors'
                >
                    ¿olvidaste tu contraseña?
                </Link>

                <div className='flex w-full mb-5'>
                    <Link
                        
                        className='bg-green-500 text-white p-5 mx-auto rounded w-2/5 text-sm hover:bg-green-600 transition-colors text-center'
                        to='/register'
                    >
                        Crear Nueva Cuenta
                    </Link>

                </div>
                
            </form>
        </div>
        
    </>
  )
}

export default Login