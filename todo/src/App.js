import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todoReducer';
import './index.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="header">
        <h2>Welcome to TaskTrackr 2.0!</h2>
        <TodoForm state={state} dispatch={dispatch} />
      </header>
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
