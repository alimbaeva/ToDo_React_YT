import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);


    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.test)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    return (
        <div>
            <h1>What's the Plane for Today?</h1>
            <TodoForm onSubmit={addTodo} />

        </div>
    )
}

export default TodoList