import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Product=()=>{
    return (
      <div>
        <input type='search' placeholder='Search'/>
        <nav>
            <Link to="new">New</Link>
            <Link to="best">Best</Link>
        </nav>
        <Outlet/>
      </div>
    )
  }

export default Product
