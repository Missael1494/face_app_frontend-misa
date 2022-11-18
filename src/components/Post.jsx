import React from 'react'

const Post = () => {
  return (
    <div className='bg-white p-5 rounded-3xl mb-4'>
        <div className='flex mb-4' >
            <img src="" alt="" />
            <input 
                type="text" 
                className='p-2 bg-slate-100 rounded-3xl'    
                placeholder='¿Que estas pensando?'
            />
            
        </div>
        <div className='p-2 border-t-2'>
            <div className='p-2'>
                <form action="">
                        <div className='flex gap-2'>
                            <label htmlFor="file">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </label>
                            <input 
                                type="file" 
                                id='file'
                                accept='.png,.jpg,.jpeg '
                                //onChange={() => }        
                            />
                        </div>
                </form>
            </div>
            
        </div>

    </div>
  )
}

export default Post