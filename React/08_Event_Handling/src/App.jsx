
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Harry")
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleMouseOver = () => {
    alert("Hey I am a mouse over")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value}) // When you use the syntax [e.target.name]: e.target.value, it will update the value of the key that corresponds to the name attribute of the input field in your form state.
    console.log(e.target.value)
      // With ...form: The spread operator ensures that the previous state is preserved, and only the specific field being updated (email or phone) is changed.
    // Without ...form: The entire state will be replaced with only the updated field, causing the other fields to be lost (and possibly resulting in errors or unexpected behavior).
    console.log(form)  //It will not print recent character as console.log runs before setform above so recent one isnt printed
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}

      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} /> 
    </>
  )
}

export default App
