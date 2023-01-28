
import { Button} from '@chakra-ui/button';
import { useState } from 'react'
import { Box,Input,Text,Stack} from '@chakra-ui/react'

import React from 'react'

export default function Todo() {
  // sab chizai yaha likhni hai  other wise error a jy ga  < imp point >

  // creating a list of 
const [todo,settodo]=useState()
  const [todos, settodos] = useState([
    { todoText: "First", completed: true },
    { todoText: "second", completed: true },
    { todoText: "third", completed: true }
  ])

  const onclickHandler=(newelm:any)=>{
   
    

const newtodo=todos.map( (todo)=>{

  if(todo.todoText==newelm.todoText){

    todo.completed=!todo.completed
  }

  return todo
  
})
console.log(newtodo);
settodos(newtodo)

  }
 

const addtodo=()=>{
  
  const toddos= {todoText:todo ,completed:false}

  const newtodos=[...todos,toddos]

  settodos(newtodos)
  
}

const deletetodo=(elms)=>{
const newtodos=todos.filter((todo)=>{
if(elms.todoText==todo.todoText)return false;

return true

})
console.log(deletetodo,todos);
settodos(newtodos)
}
  return <>
  <Box textAlign={'center'} mt='80px'  >

    <Input fontSize={'19px'} height={'33px'} w='343px' placeholder='Enter Some Todo' value={todo}  onChange={(e)=>{settodo(e.target.value)}}></Input>

  

    <Button borderRadius={'8px'}  bgColor={'aliceblue'}  height={'54px'} width='98px' ml='20px' onClick={addtodo}><Text fontSize={'28px'}>Add</Text> </Button>

       
    <ul>
      {/* agr java use krni hai to {} ya bracket use krni para gi taka wo html ma convert ho ska */}

      {
        todos.map((element) => {
          return          <li style={ { fontSize:'30px', listStyle: 'none', color: element.completed ? "blue" : "red" }}>{element.todoText}

            <Input fontSize={'9px'} type={'checkbox'} checked={element.completed} onChange={()=>{onclickHandler(element)}}></Input>

          

            <Button m='9px' width={'80px'} height='56px' onClick={()=>{deletetodo(element)}}><Text fontSize={'18px'}>Delete</Text> </Button>


          </li>
       
        
        })
      }
    </ul>
</Box>    
  </>
}

