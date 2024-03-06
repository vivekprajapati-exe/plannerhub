import { useEffect, useState } from 'react'
import './App.css'
import {Pomodoro , TodoForm, TodoItem} from './components/index'
import { TodoContext , TodoProvider ,  } from './contexts/index'
function App() {
  const [todos , setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now() , ...todo}, ...prev ])
  }
  const removeTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo = (id , todo) =>{
    setTodos((prev)=>prev.map((prevtodo) => (prevtodo.id == id ? todo : prevtodo) ))

  }
  const toggleComplete = (id) =>{
    setTodos((prev)=> todos.map((eachtodo)=> (eachtodo.id == id ? {...eachtodo , completed : !eachtodo.completed}: eachtodo )))
  }

  useEffect(()=>{
    const gettodos = JSON.parse(localStorage.getItem("todos"))

    if(gettodos){
      setTodos(gettodos)
    }
  },[])


  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))

  },[todos])
  return (
    <TodoProvider value={{todos , addTodo , removeTodo , updateTodo , toggleComplete}}>


  <div id="app_wrapper" >
      <div className="pomo_wrapper">
        <Pomodoro/>
      </div>
      <div className="line"></div>
    <div className="todo_wrapper">
      <div id="todo_form_wrapper">
        <TodoForm />
      </div>
      <div id="todo_items_wrapper">
        {todos.map((todo)=>(
          <div key={todo.id} className=''>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </div>
  </div>




    </TodoProvider>
  )
}

export default App
