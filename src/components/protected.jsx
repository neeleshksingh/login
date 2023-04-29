import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './login'

function Protected() {
    const auth = localStorage.getItem("loggedin")
  return (
   auth ? <Outlet/> : <Navigate to={<Login/>} /> 
  )
}

export default Protected
