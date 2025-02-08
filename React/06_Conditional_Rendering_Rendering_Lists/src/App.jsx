import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Heyy", desc: "Hi mann I am on nepal"
    },
    {
      title: "Heyy2", desc: "Hi mann I am on nepal2222"
    },
    {
      title: "Heyy3", desc: "Hi mann I am on nepal3333"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4  border border-e-2 border-purple-400">
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  // </div>
  //   </>)
  // }  // Creating a basic component inside a conmponent which is Todo inside App

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

      {showbtn ? <button>Show btn is true</button> : <button>Show btn is false</button>}

      {/* {showbtn && <button>Show btn is true</button>} */}
      {/* If showbtn is true then return this otherwise dont show this */}

      {todos.map(item => {
        // return <Todo key={item.title} todo = {item}/>
        return (<div key={item.title} className="m-4  border border-purple-400">
          <div className="todo">{item.title}</div>
          <div className="todo">{item.desc}</div>
        </div>)
      })}

      <div className="card">
        <button onClick={() => {
          setshowbtn(!showbtn)
          setCount((count) => count + 1)
        }}>
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
