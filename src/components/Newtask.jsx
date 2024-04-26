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
          var confirma = confirm("Sua tarefa será salva como 'tarefa sem nome', deseja alterar?");

          if(confirma){
            var pro = prompt("Digite para alterar:")
          }
          else{
            handleTaskAddition('Tarefa sem nome')
          }
         if(pro){
          handleTaskAddition(pro)
         }
         else{
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