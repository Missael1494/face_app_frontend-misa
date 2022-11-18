import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <>
            <div className='flex space-x-10 items-center'>
                <h1 className='flex-1 text-2xl'><span className='text-sky-600 font-bold text-6xl block mb-5' >face-App </span>Haz tu registro en Face-App y empieza a comunicarte y compartir con las personas que 
                forman parte de tu vida</h1>
    
    
                
                <form 
                    action=""
                    className='bg-white p-10 rounded-lg flex-1 '
                    //onSubmit={}
                >
                    <div className=''>
                        <label htmlFor="correo">Username</label>
                        <input
                            id='correo' 
                            type="text" 
                            className='p-3 mt-3 mb-3 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                            placeholder='Correo o Nombre'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="correo">E-mail</label>
                        <input
                            id='correo' 
                            type="text" 
                            className='p-3 mt-3 mb-3 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                            placeholder='Correo o Nombre'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className=''>
                        <label htmlFor="correo">Password</label>
                        <input
                            id='correo' 
                            type="Password" 
                            className='p-3 mt-3 mb-5 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                            placeholder='Correo o Nombre'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="correo">Confirm Password</label>
                        <input
                            id='correo' 
                            type="Password" 
                            className='p-3 mt-3 mb-5 rounded-lg focus:outline-none focus:border-sky-500 border border-slate-300  w-full'    
                            placeholder='Correo o Nombre'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
    
                    <div className='flex w-full mb-5'>
                        <input 
                            type="submit" 
                            className='bg-blue-500 text-white p-3 mx-auto rounded w-4/5 hover:bg-blue-600 transition-colors hover:cursor-pointer'
                            value="Registrar"    
                        />
    
                    </div>
    
                    <Link
                        className='block text-center text-sky-500 mb-5 hover:text-sky-600 transition-colors'
                        to='/'
                    >
                        ¿Ya tienes una cuenta? Ingresa!
                    </Link>
    
                    
                    
                </form>
            </div>
            
        </>
      )
}



export default Register;