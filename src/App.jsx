 import {useState} from 'react';
// import of components
  import Tasks from './components/Tasks.jsx'
  import Navbar from './components/Navbar.jsx';
  import Newtask from './components/Newtask.jsx';
  
  var nextID = 2;
  const App = () => {
    const [tasksdata, setTasksData] = useState([
      {taskTitle:"Treinar", id:"0", completed:false},
      {taskTitle:"Ir para a igreja", id:"1", completed:false},
      {taskTitle:"Estudar programação", id:"2", completed:false}
    ]);
    const handleTaskAddition = (taskTitle) => {
       const newTask = [...tasksdata, {taskTitle:taskTitle, id:nextID++, completed:false}]
          setTasksData(newTask)
    }  
    const handleDelete = (taskID) => {
        const newTask = tasksdata.filter(task => task.id !== taskID);

        setTasksData(newTask);
    }
      const SucessTask = (taskID)=>{
       const newTask  = tasksdata.map( task => {
           if(taskID === task.id) return {...task, completed: !task.completed}
              return task;
       })
       setTasksData(newTask)
      }
     
    return(
      <div className="App">
        
        <Navbar/>
          <Tasks tasksdata={tasksdata} handleDelete={handleDelete} SucessTask={SucessTask} >
            <Newtask handleTaskAddition={handleTaskAddition} />
          </Tasks>
      </div>
    )
  }
  export default App;