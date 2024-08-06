import React, { useState } from 'react'

const Todo = ({image, description, onDelete}) => {
const [done, setDone] = useState(false)

     function handleDone(){
        setDone(prevDone => !prevDone)
     }

  return (
    <>
    <div className=' w-full flex justify-between px-4 py-3 items-center  '>
        <div className='flex gap-2'>
        <input type="checkbox" className='h-10 px-2' onChange={handleDone} />
        <p className={`flex gap-2 ${done? 'line-through':'' } items-center text-white  text-xl`} >{description}</p>
        </div>
        
        <div className='bg-slate-200 h-8 w-8 flex items-center justify-center rounded-full shadow-2xl'>
        <img src={image} alt="delete" className='h-6 cursor-pointer' onClick={onDelete}  />
        </div>
        
    </div>
    <hr className='w-full border-red-100 ' />
    </>
    
  )
}

export default Todo