import React from 'react'

type User = {
    id :number ,
    name : string,
    email  : string,
    phone : string,
    username : string
}
const page = async() => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!users.ok) {
        throw new Error("Failed to fetch users");
    }
    const data : User[] = await users.json()
    
  return (
    <div>
        <div className='text-3xl'>Data of Users</div>
        <ul>
            {data.map((user) => {
                return(
                    <li key={user.id} className='border p-4 my-2'>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Username: {user.username}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default page