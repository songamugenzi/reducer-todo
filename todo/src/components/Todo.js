import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <p onClick={() => {
                props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.todo.id })
            }}
            >&rarr; {props.todo.item}</p>
        </div>
    )
}

export default Todo;