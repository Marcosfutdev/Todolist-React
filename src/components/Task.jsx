  import React from 'react'
  import './Task.css'
 
   const Task = ( {task, handleDelete, SucessTask}) =>{
  

    return(
        <li className="div_name" onClick={()=>{ SucessTask(task.id) }} style={task ? {border:"3px solid green"}:{}}
          key={task.id}>
            {task.taskTitle} 
         <div className="flex">
         <button onClick={(e)=>{
            e.stopPropagation()
            handleDelete(task.id)
         }}>X</button>
         </div>
        </li>
    )
   }
   export default Task;