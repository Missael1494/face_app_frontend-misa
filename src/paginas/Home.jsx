import React, { useEffect, useState } from 'react'
import IconLinks from '../components/IconLinks'
import Header from '../components/Header';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux'
import ListFriends from '../components/ListFriends';
import { getUserFriends } from '../actions/authActions';




const Home = () => {
    const [openMessenger, setOpenMessenger] = useState(false);

    const dispatch = useDispatch()

    const token = localStorage.getItem('token');
    //console.log('token', token)
    const friendInfo = (id, token) => dispatch(getUserFriends(id,token));



    const userFriendsInfo = useSelector(state => state.auth?.userMainInfo?.friends);
   console.log('userFriend', userFriendsInfo)
    useEffect(() => {
        

        for (let i= 0; i < userFriendsInfo.length; i++) {
            friendInfo(userFriendsInfo[i], token);
            
        }
        //friendInfo(id, token);
        //const newFriendsData = userFriendsInfo.map(id => friendInfo(id, token))
        
    },[])

    const userFriends = useSelector(state => state.auth.friendsData);
    console.log(userFriends)
    //const dispatch = useDispatch()
    


    //left-0 top-10 relative overflow-auto 
  return (
    // <div className='relative'>
        <>  
        <div className='relative'>
            <Header setOpenMessenger={setOpenMessenger} openMessenger={openMessenger}/>
                <div className='flex'>
                    <IconLinks />

                    <div className='bg-slate-200 h-screen w-2/4 p-5 overflow-auto' >
                        <Post />
                    </div>

                    <div className='bg-slate-300 h-[42rem] flex-1 sticky top-28 p-4' >

                    </div>
                    
                </div>
                    {openMessenger && (
                    <div className='absolute top-24 right-0'>

                        <div className='sticky top-24 w-96 h-[32rem] bg-slate-100 p-4'>
                                <h3 className='text-3xl mb-2'>Chats</h3>
                                <input 
                                    className='w-80 h-10 rounded-full p-3 pl-7 mb-3 block' 
                                    type="text" 
                                    placeholder='Buscador' 
                                />
                                {
                                    userFriends.map(friend => <ListFriends key={friend.id} userId={friend.id} profile={friend.imageProfile} name={friend.name}/>)
                                }
                        </div>
                        
                    </div>

                    )}

        </div>
            
        </>
        
        
    // </div>
    
  )
}

export default Home
