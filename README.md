Store: It keeps all the information in a centralized place, whenever we need it we can ask it and get it.

Reducers: They are just like controllers whose job is to update the things like adding things, removing things, all the actions etc are done by reducer. It's just an object like key-value pair and each key is a action like addTodo, removeTodo and so on...!

useSelector: It is a guy which can directly talk to the store, components use useSelector to talk to the store.

useDispatch: Whenever we want to update something in the store (It can be done Reducer, but we cannot directly call reducer, it will break the flow,) so we use UseDispatch hook to do something in reducer to update anything in the store.



## Quick Debugging 
Install the Redux DevTools plugin, then hit ctrl + shift + I, Click on >> Icon and Hit Redux, then Top Above there will be two options called "Actions" and "Settings", Hit Actions and then in state tab hit State -. See the REsult 

## Summary 
* Step 1: We craete a Store Inside app/store.js, here we give reducers ....!
The Line we wrote :-
~~~

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../feature/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

~~~
Here notice we used todoReducer as reducer which is present in **todoSlice.js** File just an alias given as todoReducer we can rename it to anything ;)

* Step 2: Here we wrap out whole application with provider and make our whole application aware of store ;)

~~~
import { Provider } from 'react-redux';

    <Provider store={store}> {/* Wrap your app with Provider component */}
    <App />
    </Provider>
~~~

* Step 3: Define your functionality , here we call it as slices. How we do so?
- Initialize your Slice with initialState i.e how your state will look like when application starts ;)
- Once the above is done use createSlice Method which is available in the redux toolkit
- After doing that provide a name to the slice, Initial state and then the list actual functions/reducers which will be implemented.
- Export your reducer what ever we have created 
~~~
export default todoSlice.reducer
~~~
this will be used in store.
- Also donot forget to export individual methods, beacuse when we use dispatch these individual methods will be useful.
~~~
export const {addTodo,removeTodo} = todoSlice.actions
~~~
- Thats all the redux-toolkit
- Now we need to know how to use it, this is done by using the dispatch 
- Move to AddTodo.js and see the Implementation:
    - First we need to talk to the store and send some data to it.
    - So Import two things useDispatch and what Functionality we wan't to use.
    ~~~
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    // We actually don't update it but we need something to collect the info. , wrap it up and send it upto the handler which is addTodo.
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    ~~~
    - By doing so, we can send data to the Store
- Now how can we extract data? To do so we use useSelector
~~~
 const todos = useSelector((state) => state.todos);
~~~

[**Summary and Workflow of the project**](https://youtu.be/pX0SBJF01EU?t=3289)