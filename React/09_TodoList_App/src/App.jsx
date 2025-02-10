import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar"
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='border-2 border-purple-600 w-1/2 '/>
          <button className='bg-violet-800 hover:bg-violet-600 p-3 py-1 text-white rounded-md mx-6 font-bold'>Submit</button>
        </div>
        <div className="text-xl font-bold" >
          <h2>Your Todos</h2>
        </div>

        <div className="Todos">
          <div className="todo flex flex-col">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquam!</div>
            <div className="buttons">
              <button className='bg-violet-800 hover:bg-violet-600 p-3 py-1 text-white rounded-md mx-6 font-bold'>Edit</button>
              <button className='bg-violet-800 hover:bg-violet-600 p-3 py-1 text-white rounded-md mx-6 font-bold'>Delete</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
