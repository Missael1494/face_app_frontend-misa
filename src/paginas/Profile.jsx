import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import clienteAxios from '../config/axios';

const Profile = () => {
    const [imageUrl, setImageUrl] = useState('');

    //const userImage = useSelector( state => state.auth.userInfo.imageprofile );
    //console.log(userImage);

    const token = localStorage.getItem('token');

    const config2 = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const getImageUrl = async() => {
            const imageProfileUrl = await clienteAxios('/users/get-imageUrl-profile', config2 );
            const {data} = imageProfileUrl;
            setImageUrl(data.result);
        }
        getImageUrl();
        
    }, [])
    
    console.log('imageURLLLL',imageUrl)

    const userName = useSelector(state => state.auth?.userMainInfo.name);



    const [image, setImage] = useState({
        title: '',
        photo: null
    })

    const cerrarSesion = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')

    }

    const selectImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        //console.log('holasubmit phto');
        //console.log('holafoto', image.photo)

        formData.append('photo', image.photo);
        //console.log('formdata',formData)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }
        
        //console.log('IMAGE', image)
        const response = await clienteAxios.post('/users/upload-imageProfile', formData, config )
        //console.log('responseImagE',response)

        const imageProfileUrl = await clienteAxios('/users/get-imageUrl-profile', config2 )
        console.log('Image Profile',imageProfileUrl.data.result)
        setImageUrl(imageProfileUrl.data.result)

    }
  return (
    <>
        <Header />
        <div className='flex p-5 bg-gray-400 h-screen '>
            <div className='bg-slate-50 h-80 w-full p-3 rounded-2xl'>
                <div className='flex items-center' >
                    <div className='h-52 w-52 rounded-full border-2'>
                        <img
                            className='h-52 w-52 rounded-full border-2'
                            src={imageUrl}
                            alt="" 

                        />
                    </div>
                    
                    <div>
                        <form 
                            action=""
                            onSubmit={selectImage}
                        >
                            <div className='flex gap-2'>
                                <label htmlFor="file">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </label>
                                <input 
                                    name='photo'
                                    type="file" 
                                    //id='file'
                                    accept='.png,.jpg,.jpeg '
                                    className='read-only:bg-gray-100 '
                                    onChange={(e) => setImage({...image, photo: e.target.files[0]})}        
                                />
                            </div>
                            <button type='onSubmit'>
                                subir
                            </button>
                        </form>
                    </div>
                    
                </div>
                <div className=''>
                    <h2 className='text-2xl font-mono font-bold'>{userName}</h2>
                </div>
            </div>
            <button
                onClick={cerrarSesion}
                > cerrar sesion
            </button>

        </div>
    </>
    
  )
}

export default Profile