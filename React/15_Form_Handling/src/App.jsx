import { useState } from 'react'
import './App.css'

import { useForm } from "react-hook-form"




function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit= (data) => console.log(data)

  return (
    <>
      <div className="container" >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username" , {required:true , minLength:10 , maxLength:15 })} type="text" />
          { errors.username && <div className='red'>{errors.username.message}</div> }
          <br />
          <input placeholder='password' {...register("password")} type="password" />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </>
  )
}

export default App
