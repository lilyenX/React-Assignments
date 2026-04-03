import React, { useState } from 'react'

const App = () => {
  interface User{
    id: number,
    name: string,
    title: string,
    imgUrl: string,
  }
  const [users,setUsers] = useState<User[]>([])//empty array for now
  
  return (
    <div>
      <h1>Our Team</h1>
      <div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default App
