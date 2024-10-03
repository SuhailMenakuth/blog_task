import React,{useState} from 'react'
import {useNavigate ,Link} from 'react-router-dom'


function FormList({tasks}) {
    const navigate = useNavigate()

    function handleClick(){

        navigate('/form')
        
        
    }

   

    const [color,setColor]= useState('green')
    
    function handleColor(color){

        setColor();

    }

    
  return (

    <div>
        <h1>task list</h1>
        <button onClick={handleClick}>Add Tasks</button>

        {tasks.map((task) =>{
            return (
                <ul>
                    <div style={{width:"100px" ,height:"50px" ,backgroundColor:"green"}}>
                        <li>
                            <Link to={`/formDetails/${task.id}`} > {task.name}</Link>
                            
                            </li>
                        <button onClick={handleColor}>task completed</button>
                        </div>
                    
                </ul>
            );
        })}

        
      
    </div>
  )
}

export default FormList
