import React from 'react'
import {useParams} from 'react-router-dom'

function FormDetails({tasks}) {
    const task=useParams()
    const Id = task.id;

  return (

    <div>
        {tasks.map((task) =>{
            if (task.id == Id){
                return (
                    <div style={{backgroundColor :"lightblue" ,width:"100px",height:"50px"}}>
                    
                       {task.name} {task.duration}
                    
                    </div>
                )
            }
        })}
      
    </div>
  )
}

export default FormDetails
