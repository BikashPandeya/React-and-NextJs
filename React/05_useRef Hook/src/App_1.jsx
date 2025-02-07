// In React, normal JavaScript variables are not used to store values that affect rendering because React does not track their changes. If you update a normal variable, React won’t re-render the component, meaning the UI won't reflect the change.

// Instead, useRef is used when we need to store values without causing re-renders. It is commonly used for:

import { useState , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  // let a = 0;   // Normal variable (normalVar) resets on re-render.  React doesn't track this change
  const a = useRef(0)   
  useEffect(() => {
    // a++     //  React doesn't track this change
    a.current++; // Value updates, but no re-render
    console.log(`Rerendring the value of a is ${a.current}`)
  })
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App