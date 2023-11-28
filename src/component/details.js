import React, { Component } from 'react'
import axios from 'axios'
export class Details extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         age:"",
         address:"",
         location:"",
         bloodgroup:"",
         phonenumber:""
      }
    }
    componentDidMount(){
      axios.get(`http://localhost:3001/details`)
      .then(res=>{
        this.setState({list:res.data})
      })
      .catch()
    }
    addtodb=()=>{
        const {name,age,address,location,bloodgroup,phonenumber}=this.state
        axios.post('http://localhost:3001/details',{
            name:name,
            age:age,
            address:address,
            location:location,
            bloodgroup:bloodgroup,
            phonenumber:phonenumber
        })
        .then(res=>{
            console.log(res)
            alert("Data added successfully")
        })
        .catch(err=>{
            console.log(err)
        })
    } 
  render() {
    const {name,age,address,location,bloodgroup,phonenumber}=this.state
    return (
      <div>
        <form className='details'>
            <h1>Details of a person</h1>
            <label>Name</label>
            <input value={name} onChange={(e)=>this.setState({name:e.target.value})}/><br></br>
            <label>Age</label>
            <input value={age} onChange={(e)=>this.setState({age:e.target.value})}/><br></br>
            <label>Address</label>
            <textarea value={address} onChange={(e)=>this.setState({address:e.target.value})}></textarea><br></br>
            <label>Mobile</label>
            <input value={phonenumber} onChange={(e)=>this.setState({phonenumber:e.target.value})}/><br></br>
            <label>Location</label>
            <select value={location} onChange={(e)=>this.setState({location:e.target.value})}>
                <option>select location</option>
                <option>Kurnool</option>
                <option>Nandyal</option>
                <option>Vijayawada</option>
                <option>Hyderabad</option>
            </select>
            <label>Blood Group</label>
            <select value={bloodgroup} onChange={(e)=>this.setState({bloodgroup:e.target.value})}>
              <option>select bloodgroup</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
            </select>
            <button onClick={this.addtodb}>Register</button>
        </form>
      </div>
    )
  }
}

export default Details
