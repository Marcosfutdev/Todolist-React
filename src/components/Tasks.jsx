  import React from 'react'
   import Task from './Task';
  import './Tasks.css'

   const Tasks = ( {tasksdata, children, handleDelete, SucessTask}) => {
    return(
        <div className="container_tasks"> 
        
             {children}
             <div className="position">
                
             {
                tasksdata.map(( task)=>(
                    <Task task={task}  handleDelete={handleDelete} SucessTask={SucessTask} />
                ))
             }
            </div>  
        </div>
    )
   }
   export default Tasks;