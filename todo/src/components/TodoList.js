import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {

    return (
        <section className='todo-list'>
            {props.state.todos.map((todo, i) => {
                return (
                    <Todo todo={todo} key={i} dispatch={props.dispatch} />
                )
            })}
            <button
                className='clr-btn'
                onClick={() => props.dispatch({ type: 'CLEAR_TODO' })}>
                Clear completed
            </button>
        </section>
    )
}



export default TodoList;