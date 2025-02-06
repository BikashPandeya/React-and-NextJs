import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='Card' style={{backgroundColor : "yellow" , overflow : "hidden"} }>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src="https://th.bing.com/th/id/OIG3.80EN2JPNx7kp5VqoB5kz" alt="" width={245}
    />
    </div>
  )
}

export default Card
