// Slice is nothing but helps us to create big object which we actually export 
// but this slice is responsible for tracking initial state of the store
// as well as all of the reducers are also collected here.

import { createSlice, nanoid } from '@reduxjs/toolkit';

/*
- createSlice is a utility function provided by Redux Toolkit (RTK) that simplifies the process of writing Redux logic.
    It allows you to define a "slice" of the Redux state by specifying the initial state, reducers (functions that specify how the state should change in response to actions), and automatically generates action creators and action types.
- nanoid is a small, secure, URL-friendly, unique string ID generator. It's useful for generating unique IDs in your Redux state, especially when you need to create new items, such as when adding a new todo.
*/


const initialState = {
  todos: [{id:1,text:'foo'},{id:2,text:'bar'},{id:3,text:'baz'}],
}

export const todoSlice = createSlice({
    // It is a better idea to assign name like what each slice do
    // For ex: one slice could do authentication , another slice could be denoting projects, amother slice could be denoting chatApp and there could be many
    name:'todo',
    initialState,
    reducers:{
        // here state is the previous state and action is the something through which we can send some data
        // for ex we wan't to delete something then we need to pass ID, ...
        addTodo: (state,action) => {
            // it takes help from the state to know what is already there in the store 
            // And through the action we can pass on some data 
            const todo={
                id:nanoid(),
                text:action.payload,
            };
            // we have extracted info. from the action and we have created a Todo, but we haven't yet pushed it
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            // it takes help from the state to know what is already there in the store
            // And through the action we can pass on some data
            // We are going to filter out the todo that matches the id that was passed in the action
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
});



// Note : Reducers talk to store using dispatch ;)
// All the reducers that we have created we need to export it.
export const {addTodo,removeTodo} = todoSlice.actions
// We are doing the below because this is something which needs to be wired up with the store 
// Note : The above can be just imported and we dont require anykind of Wrapping or Mounnting stuffs ;)
export default todoSlice.reducer;

// Now the functionality is ready and any of the component can go back and ask this state  const initialState = {
//   todos: [],
// }
// That component can reach out this todos directly ;)
// Offcourse it has to use the methods like useSelector to reach out
// If any component wan't to add things/remove things then they can do so by using useDispatch use the reducers to talk to the store ;) 