import React, {useState} from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userBool,setUserBool]=useState(false)
    const auth=useAuth()
    const navigate=useNavigate()
    const handlesignup=(event)=>{
      const userToken=auth.userlist.some(x=>x.email===email)
      if(userToken){
        setUserBool(true)
      }
      else{
        auth.signup(email,password,firstName,lastName)
        navigate('/signupsuccess')
      }
        event.preventDefault()
    }
    const change=(event)=>{
        setEmail(event.target.value)
    }
    const change1=(event)=>{
      setPassword(event.target.value)
    }
  return (
    <div>
      <form onSubmit={handlesignup} className='signup-form'>
      <label>First Name</label>
      <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required/><br></br>
      <label className='signlname'>Last Name</label>
      <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/><br></br>
      <label>Email</label>
      <input type='email' value={email} onChange={change} required/><br></br>
      <label>password</label>
      <input type="password" value={password} onChange={change1} required/><br></br>
      {userBool?<p>Email is already Exists</p>:""}
      <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
