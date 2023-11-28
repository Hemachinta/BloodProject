import React, { Component } from 'react'
import axios from 'axios'
import Details from './details'
export class Details1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
       popupbool:false,
       name:"",
       age:"",
       address:"",
       location:"",
       bloodgroup:"",
       phonenumber:"",
      id:""
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3001/details`)
    .then(res=>{
      this.setState({list:res.data})
    })
    .catch()
  }
  deleteDet=(id)=>{
    axios.delete(`http://localhost:3001/details/${id}`)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)})
      alert("Deleted")
      window.location.reload() 
  }
  cancel=(e)=>{
    this.setState({popupbool:false})
    e.preventDefault()
  }
  showpopup=(id,name,age,address,location,bloodgroup,phonenumber)=>{
    this.setState({popupbool:true,
      name:name,
      age:age,
      address:address,
      location:location,
      bloodgroup:bloodgroup,
      phonenumber:phonenumber,
      id:id
})
  }
updateDet=(e)=>{
  const {id,name,age,address,location,bloodgroup,phonenumber}=this.state
  axios.put(`http://localhost:3001/details/${id}`,{
    name:name,
      age:age,
      address:address,
      location:location,
      bloodgroup:bloodgroup,
      phonenumber:phonenumber
  })
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })
}
  render() {
    const {id,name,age,address,location,bloodgroup,phonenumber}=this.state
    return (
      <div>
        <Details/><br></br>
        <table className='emp-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(x=>(<>
            <tr>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.address}</td>
              <td>{x.location}</td>
              <td>{x.bloodgroup}</td>
              <td>{x.phonenumber}</td>
              <td><button onClick={()=>this.showpopup
                (x._id,x.name,x.age,x.address,x.location,x.bloodgroup,x.phonenumber)}>Update</button>
              <button onClick={()=>this.deleteDet(x._id)}>Delete</button></td>
              </tr></>))}
          </tbody>
        </table>
        {this.state.popupbool?<>
        <div className='popup'>
          <form className='form-update'>
            <button className='popup-cancel' onClick={this.cancel}>X</button>
            <label>Name</label>
            <input value={name} onChange={(e)=>this.setState(
              {name:e.target.value})}/><br></br>
               <label>Age</label>
            <input value={age} onChange={(e)=>this.setState(
              {age:e.target.value})}/><br></br>
               <label>Address</label>
            <input value={address} onChange={(e)=>this.setState(
              {address:e.target.value})}/><br></br>
               <label>Location</label>
            <input value={location} onChange={(e)=>this.setState(
              {location:e.target.value})}/><br></br>
              <label>Blood Group</label>
            <input value={bloodgroup} onChange={(e)=>this.setState(
              {bloodgroup:e.target.value})}/><br></br>
              <label>Phone Number</label>
            <input value={phonenumber} onChange={(e)=>this.setState(
              {phonenumber:e.target.value})}/><br></br>
              <button onClick={this.updateDet}>Update</button>
              </form>
              </div>
              </>:""}<br></br>
      </div>
    )
  }
}

export default Details1
