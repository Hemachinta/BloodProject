import React, { Component } from 'react'
import { useState } from 'react'
import {useAuth} from './auth'
import { useNavigate } from 'react-router-dom'
const Login=()=>{
    const auth=useAuth()
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [lis,setLis]=useState(true)
    const [password,setPassword]=useState('')
    const change=(event)=>{
        setEmail(event.target.value);
        }
    const change1=(event)=>{
      setPassword(event.target.value);
   }
    const handlelogin=(event)=>{
      console.log(auth.userlist)
        auth.userlist.map(x=>{
          if(x.email==email && x.password==password){
            auth.login(email)
            navigate('/loginsuccess')
            setLis(true)
            event.preventDefault()
          }
          else{
            setLis(false)
          }
        })
        event.preventDefault()
    }
    return (
      <div>
        <form onSubmit={handlelogin} className='login-form'>
        <label>Email</label>
        <input type='email' value={email} onChange={change} required/><br></br>
        <label>password</label>
        <input type='password' value={password} onChange={change1} required/><br></br>
        <button type='submit'>Login</button>
        {!lis?<p>Invalid User</p>:''}
        <h3>If you dont have account</h3>
        <a href='/signup'>Signup</a>
        </form>
        <br></br>
      </div>
    )
  }

export default Login
