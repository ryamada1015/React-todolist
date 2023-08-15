
export function TodoItem({id, title, completed, toggleTodo, removeTodo}){
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)} 
                id="checkbox" />
                {title}
            </label>
            <button 
            onClick={() => removeTodo(id)}
            className="btn btn-danger"
            >Remove</button>
        </li>
    )
}