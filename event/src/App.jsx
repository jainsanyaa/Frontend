import './App.css'
import EventToDo from './EventToDo'
import EventTodo from './EventToDo'
import Counter from './Counter'
import Search from './Search'
import { useEffect, useState } from 'react'
function App() {
  
  useEffect(() =>{console.log("Welcome")},[])
  return (
    <>
     {/* <EventToDo />
     <Search /> */}
     <h1>My App</h1>
     <Counter />
    </>
  )
}

export default App