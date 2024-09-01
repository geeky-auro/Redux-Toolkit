import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice';

// how to read the data
function Todos() {
    // Note : USeselector ahs teh access of the state ;)
    // useSelector((state)=>{state})
    
    const todos = useSelector((state) => state.todos);
    // The above code everytime updates in the store ;)
    console.log(todos); 
    // Whenever we want to remove todos then we have to do it via dispatch ;)
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => dispatch(removeTodo(todo.id))}
                className='text-white bg-white-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Todos