import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Form({addTask}) {

  const  [name,setname]=useState('')
  const  [duration,setDuration] = useState('');
    const navigate = useNavigate()

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask= { id: Date.now(),
         name, 
         duration };

    addTask(newTask);
    navigate('/');
    
   
};

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=""> name</label>
            <input type="text" 
            placeholder='name'
            value={name}
            onChange={(e) =>setname(e.target.value)}
            />

            <label htmlFor=""> Duration</label>
            <input type="text"
            placeholder='Duration'
            value={duration}
            onChange={(e) =>setDuration(e.target.value)}

            />

            <button type='submit '> Save </button>

        </form>
      
    </div>
  )
}

export default Form
