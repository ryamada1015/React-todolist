import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, removeTodo}){
    return (
        <ul className="todo-list">
            {/* short circuiting (JS) */}
            <li className="notodo-msg">{todos.length == 0 && "No todos"}</li>
            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    />
                )})
            }
        </ul>
    )
}