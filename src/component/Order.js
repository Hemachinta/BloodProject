import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
const Order=()=>{
    const navigate=useNavigate()
    return (
      <div>
        Order Conformed
        <button onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    )
  }

export default Order
