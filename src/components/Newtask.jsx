  import React, { useState } from 'react'
   import './Newtask.css'
  const Newtask = ( {handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');
      const handleClickAdd = () =>{
        handleTaskAddition(inputData);
        if(inputData.length > 0){
          handleTaskAddition(inputData);
          setInputData('');
        }
        else{
         var confirma =  confirm('Sua tarefa será nomeada como "tarefa sem nome". Deseja alterar? ')
         if(confirma){
         var prom =  prompt('Digite para modificar:')
        handleTaskAddition(prom)
         } else{
             handleTaskAddition('Tarefa sem nome')
         }

        }
      }
      
    return(
        <div className="container_new">
           <input type="text" value={inputData} placeholder="Adicione uma tarefa" className="input_text" onChange={(e)=>{
            setInputData(e.target.value)
           }} />
           <button onClick={handleClickAdd} className="button">Enviar</button>
        </div>
    )
  }
  export default Newtask;