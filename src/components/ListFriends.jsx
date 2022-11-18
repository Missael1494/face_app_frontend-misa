import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getUserFriends } from '../actions/authActions';
import clienteAxios from '../config/axios';


const ListFriends = ({profile, name, userId}) => {
  console.log('profile', profile)
  //const profileimage = {profile}
  
  const [imageUrl, setImageUrl] = useState('')

  const token = localStorage.getItem('token')
  console.log('token222', token)
  const config2 = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    const getImageUrl = async() => {
        const imageProfileUrl = await clienteAxios(`/users/get-imageUrlFriend-profile/${profile}`, config2 );
        console.log('image', imageProfileUrl)
        const {data} = imageProfileUrl;
        console.log('data', data)
        setImageUrl( data.result);
    }
    getImageUrl();
    
  }, [])

console.log('ImageFriendUrl', imageUrl)
  
  // const dispatch = useDispatch();
  // const friendInfo = (id) => dispatch(getUserFriends(id,token));
  // useEffect(() => {
  //   const infoFriend = friendInfo(id);
  //   console.log('info-Friend', infoFriend)
    
  // }, [])
  
  // const userInfo = useSelector(state => state.auth.friendsData);
  // console.log('userinfo-FRIENDS', userInfo[0].name)


  return (
    <Link to={`/userlog/chat/${userId}`}>
      <div 
        className='p-3 bg-slate-50 hover:cursor-pointer hover:bg-white'
      >
        <div className='flex items-center'>
          <img className='w-10 h-10 rounded-full ' src={imageUrl} alt="" />
          <h1> {name}</h1>
        </div>
        
        
      </div>
    </Link>

  )
}

export default ListFriends