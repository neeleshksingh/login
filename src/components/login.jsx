import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav = useNavigate()
    const [data,setData] = useState({
        email : "",
        password : ""
    })

    const handleLogin =(e)=>{
        e.preventDefault()
        const loggedUser = JSON.parse(localStorage.getItem('user'))
        if(data.email === loggedUser.email && data.password === loggedUser.password){
            localStorage.setItem("loggedin",true)
            nav("/")
        }
    }
  return (
    <div>
      <input type="text" placeholder='email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
      <input type="password" placeholder='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={()=>nav("/reg")}>Register</button>
    </div>
  )
}

export default Login
