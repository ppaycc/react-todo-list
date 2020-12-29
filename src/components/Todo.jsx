import React from 'react';
import InputForm from "./InputForm";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const Todo = props => {

    const todo = useSelector(state => state.todo.todo);
    const arrTodo = todo.map(item =>{
        return <TodoItem data={item} key={item.id}/>
    })
    debugger
    return(
        <>
            <h2>react-todo-list</h2>
            <div className='Todo'>
                <div>
                    {arrTodo}
                </div>
                <InputForm/>
            </div>
        </>
    )
};

export default Todo;