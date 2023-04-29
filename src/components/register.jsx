import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const nav = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(data))
        nav("/login")
    }

  return (
    <div>
      <input type="text" placeholder='email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
      <input type="password" placeholder='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
      <button onClick={()=>nav("/login")}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
