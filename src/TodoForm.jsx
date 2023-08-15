import { useState } from "react"

export function TodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if (newItem == "") return
        
        onSubmit(newItem)
    
        setNewItem("")
    }
    
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <h1>To Do List</h1>
            <div className="form-container">
                <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} name="" id="input-area" placeholder="enter item name..." />
                <button id="submit-btn">Add</button>
            </div>
        
        </form>
    )
}