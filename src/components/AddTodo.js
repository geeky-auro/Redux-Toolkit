import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../feature/todo/todoSlice'
function AddTodo() {
    // We know getting a data from form and putting it in useStae is no big deal
    // But collecting the data and sending it to the store is a big thing
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    // We actually don't update it but we need something to collect the info. , wrap it up and send it upto the handler which is addTodo.
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
    <input 
    type='text'
    className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    placeholder='Enter a Todo...'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <button type='submit' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-900 transition duration-200 ease-in-out'>Add Todo</button>
    </form>
    
  )
}

export default AddTodo