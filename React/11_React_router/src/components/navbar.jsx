import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const navbar = () => {
   
  return (
    <div>
      <nav>
        <NavLink className = {(e) => {return e.isActive?"red" : ""}} to="/"><li>Home</li></NavLink>
        <NavLink className = {(e) => {return e.isActive?"red" : ""}} to="/login"><li>Login</li></NavLink>
        <NavLink className = {(e) => {return e.isActive?"red" : ""}} to="/about"><li>About</li></NavLink>
      </nav>
    </div>
  )
}

export default navbar
