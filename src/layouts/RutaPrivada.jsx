import React, { useMemo, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'
//import  Header from ''
import { userAuthenticate } from '../actions/authActions';

//import Header from '../components/Header';


const RutaPrivada = () => {

  const [token, setToken] = useState('')
    const dispatch = useDispatch();
  const navigate = useNavigate();


  //const token = localStorage.getItem('token')
  useMemo(() => setToken(localStorage.getItem('token')), [token]);

    //console.log(token)
  //const friendInfo = (id, token) => dispatch(getUserFriends(id,token));
  const userInfoToken = (info) => dispatch( userAuthenticate(info));
  //const friendInfo = (id, token) => dispatch(getUserFriends(id,token));

  useEffect(() => {
    
    if(token) {
        userInfoToken(token);
        //navigate('/userlog')
    } else {
        navigate('/')
    }   
  },[token]);
  //console.log('primero')

   const userInfo = useSelector(state => state.auth.userMainInfo._id);
   //const userInfo2 = useSelector(state => state.auth.userInfo);

   console.log('userInfo',userInfo)

   

  return (

    <>  
        {
            userInfo 
            && (
                <>
                
                {/* <div className='flex flex-col'> */}
                    
                    {/* <Header /> */}

                    
                    {/* <div className=''> */}
                        <Outlet />
                    {/* </div> */}

                {/* </div> */}
                </>
                
            )
        }
        
    </>
  )
}

export default RutaPrivada