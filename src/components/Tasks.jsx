  import React from 'react'
  // component com lazy
  // lazy
  import {lazy, Suspense} from 'react'
  const Task = lazy(() => import('./Task'))
  //style
  import './Tasks.css';


   const Tasks = ( {tasksdata, children, handleDelete, SucessTask}) => {
    return(
        <div className="container_tasks"> 
             {children}

             <div className="position">
              <Suspense fallback={<p>Loading...</p>}>
              
              {
                  
                  tasksdata.map(( task )=> (
                      <Task task={task} handleDelete={handleDelete} SucessTask={SucessTask} />
                      ))
                  }
             </Suspense>
            </div>  
          
        </div>
    )
   }
   export default Tasks;
