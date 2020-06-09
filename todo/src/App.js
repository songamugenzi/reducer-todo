import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todoReducer';
// import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the new and improved TaskTrackr!</h2>
        <TodoForm state={state} dispatch={dispatch}/>
      </header>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
