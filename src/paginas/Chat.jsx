import React, { useEffect } from 'react'
import Header from '../components/Header'

const Chat = () => {
    useEffect(() => {
      
    
      
    }, [])
    


  return (
    <>
        <Header />

        <div>
            <div className='bg-slate-50 h-160 w-2/4 border-solid border-gray-300 border-2 border-y-2 mx-auto overflow-auto'>
                
            </div>
            <div className='h-10 mx-auto w-2/4 '>
                <input className='h-10 w-full' type="text" placeholder='Escribe tu mensaje'/>
            </div>
        </div>
    </>
    
  )
}

export default Chat