import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective ,getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am an {adjective} Navbar.
      <button onClick={() => {
        getAdjective()
      }}> {
        getAdjective()
      }</button>
    </div>
  )
}

export default memo(Navbar) //Memo freezes the Navbar component against any unnecessary rerender.
//Like if we donot use it then it rerenders its every component . Memo prevents it
//Memo only rerenders Navbar if props are changed
