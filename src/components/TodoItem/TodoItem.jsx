import React, { useState } from 'react'
import "./TodoItem.css"
import { useTodo } from '../../contexts/index'

export default function TodoItem({todo}) {

  console.log("items loaded");
  const { updateTodo , toggleComplete , removeTodo} = useTodo()
  const [isTodoEditable , setIsTodoEditable] = useState(false)
  const [todomsg , setTodoMsg] = useState(todo.todo)


  const EditTodo = () =>{
    updateTodo(todo.id , {...todo , todo:todomsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () =>{
    toggleComplete(todo.id)
  }

  return (
    <div className='flex' id='todocard'>
      <div id="todo_title_wrapper" className='flex gap-1'>
      <input 
      type="checkbox"
      className='cursor-pointer Todo_checkbox'
      checked={todo.completed}
      onChange={toggleCompleted}
      />
      <input 
      className='Todo_title'
      type="text"
      value={todomsg}
      onChange={(e)=> (setTodoMsg(e.target.value))}
      readOnly={!isTodoEditable}
      />
      </div>
    <div className="todo_btns flex gap-2">
    <button 
    className=' rounded-xl px-2 py-1' 
    onClick={()=>{
      if(todo.completed) return
      if(isTodoEditable){
        EditTodo() 
      }else setIsTodoEditable((prev) => !prev)
    }}
    disabled={todo.completed}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    </button>
    <button 
    className=' rounded-xl px-2 py-1'
    onClick={() => removeTodo(todo.id)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    </button>
    </div>
    </div>
  )
}