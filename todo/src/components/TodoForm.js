import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodoText, setNewTodoText] = useState('');
    // const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewTodoText(e.target.value)
    };

    return (
        <form>
            <input
                className='todo-input'
                type='text'
                name='newTodoText'
                value={newTodoText}
                onChange={handleChanges}
            />
            <button
                className='add-item'
                onClick={(e) => {
                    e.preventDefault()
                    props.dispatch({ type: 'ADD_TODO', payload: newTodoText });
                    setNewTodoText('')
                }}
            >Add to-do</button>
        </form>
    )
};

export default TodoForm;