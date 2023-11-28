import React, { Component } from 'react'
import Hello from './project'
import { Layout1 } from './Parent1'
import Task1 from './task1'
import { useNavigate } from 'react-router-dom'
const Home=()=>{
  const navigate=useNavigate()
    return (
      <div>
        <div>
        {/* <h1>Home page</h1>
        <button onClick={()=>navigate("order",{replace:true})}>Order Now</button> */}
        <Hello/>
      <div className='class'>
      <Layout1/>
      </div>
      <br></br>
      <br></br>
      <Task1/>
      </div>
      </div>
    )
}

export default Home
