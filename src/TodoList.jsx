import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, removeTodo}){
    return (
        <ul className="todo-list">
            {/* short circuiting (JS) */}
            {todos.length == 0 && "No todos"}
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