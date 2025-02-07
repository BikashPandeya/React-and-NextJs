import React, { useEffect } from 'react'




const Navbar = ({ color }) => {
  //Case 1:Run on Every render 
  useEffect(() => {
    alert("Heyy I will run on every render")
  })

  //Case 2:Run only on first render
  useEffect(() => {
    alert("Heyy I will run on first render")
  }, [])
  



    //Example of Cleanup Function
  useEffect(() => {
    alert("Heyy . This is the first render off app.jsx")
    return()=>{
      alert("Component was unmounted or removed")
    }
  }, [])

  return (
    <div>
      I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
