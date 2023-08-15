import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
  }

  

  return (
  <>
    <form onSubmit={handleSubmit} className="todo-form">
      <h1>To Do List</h1>
      <div className="form-container">
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="" id="input-area" placeholder="enter item name..." />
        <button id="submit-btn">Add</button>
      </div>
      <div className="list-container">
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} id="checkbox" />
                  {todo.title}
                </label>
                <button>Remove</button>
            </li>
            )
          }
          )
        }
          
        </ul>
        
      </div>
      

    </form>
    
  </>
  )
}