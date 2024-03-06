import React, { useContext, useState } from 'react'
import { TodoContext , useTodo } from '../../contexts/index'
import './TodoForm.css'

export default function () {

  const [todo , setTodo] = useState("")

  const {addTodo} = useTodo()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!todo) return
    addTodo({todo , completed:false})
    setTodo("")
    console.log("sucessfully submited" , todo)
  }

  return (
    <div>
      <form className='flex' onSubmit={handleSubmit}>
        <div id="form_wrapper" className='flex'>
        <input 
        className='text-black '
        id='todo_input'
        type="text"
        placeholder='Write Todo'
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type='submit' id='todo_add_btn' >Add</button>
        </div>
      </form>
    </div>
  )
}
