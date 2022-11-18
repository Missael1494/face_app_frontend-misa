import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { userAuthenticate } from '../actions/authActions';




const AuthLayout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfoToken = info => dispatch( userAuthenticate(info))


  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if(token) {
        userInfoToken(token)
        navigate('/userlog')
    } else {
      navigate('/')
  }   
  },[])




  return (
    <>
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center' >
            <div className='md:w-3/4 lg:w-4/5 bg-blue-100 p-5' >
                <Outlet />

            </div>

        </main>
    </>
  )
}

export default AuthLayout;