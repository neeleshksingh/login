import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const handleLogout = ()=>{
        localStorage.removeItem("loggedin")
        nav("/login")
    }
  return (
    <div>
      <h1>Welcome! {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
