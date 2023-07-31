import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList(){
    //State Array Which hold all Todos
    const [todos,setTodos] = useState([]);

    //Add todo to list
    const addTask = task => {
        if (!task.text) {
            return
        }

        const newTodos = [task,...todos];
        // const oldTask = todos;
        // todos.push(task);
        setTodos(newTodos);
    }

    //remove todo from the list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task=>task.id !== id)
        setTodos(updatedTasks)
    }

    //task is completed
    const completeTask = id =>{
        let updatedTasks = todos.map(todo=>{
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    return <div>
        <TodoForm addTask= {addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;
}