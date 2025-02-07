import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

console.log(Navbar)
function App() {
  const [count, setCount] = useState(0)
  // const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)



  //Case 3:Run only when certain value change
  useEffect(() => {
    alert("Heyy I am running only when color was changed")
    setcolor(color+1)
  }, [count])

  // useEffect(() => {
  //   alert("First was changed")
  // }, [first])

  // useEffect(() => {
  //   alert("Heyy . This is the first render off app.jsx")
  //   return()=>{
  //     alert("Component was unmounted")
  //   }
  // }, [])

  return (
    <>
    <Navbar color = {"Cyan " + "Blue"+color}/>
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
