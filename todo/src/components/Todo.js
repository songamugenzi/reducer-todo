import React from 'react';

const Todo = (props) => {
    return (
        <div className='todo-item'>
            <p onClick={() => {
                props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.todo.id })
            }}
            className={`todo${props.todo.completed ? '-completed' : ''}`}
            >{props.todo.item}</p>
        </div>
    )
}

export default Todo;