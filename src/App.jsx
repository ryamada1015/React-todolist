import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

// react compnents typically follow the same format: 
// hooks -> helper functions -> return statement

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  // useEffect calls a function every time [todos] change 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        // ... is a spread operator - unpacks the array into another array, or object properties into another object 
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(id == todo.id)
          return { ...todo, completed }
        return todo
      })
    })
  }  

  function removeTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }


  return (
  <>
    <TodoForm onSubmit={addTodo}/>
    <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    
  </>
  )
}