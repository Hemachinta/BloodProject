import React, { Component } from 'react'
import './pro.css'
export class Layout2 extends Component {
    constructor(props){
        super(props)
        this.state={
            expand:false
        }
    }
    expand=()=>{
        this.setState(prev=>({
            expand:!prev.expand
        }))
    }
  render() {
    return (
      <div onClick={this.expand}>
        <p>
            {this.state.expand || <img src={this.props.A1}/>}
            {this.state.expand || <img src={this.props.A2}/>}
            {this.state.expand || <img src={this.props.B1}/>}
            {this.state.expand || <img src={this.props.B2}/>}
            {this.state.expand || <img src={this.props.AB1}/>}
            {this.state.expand || <img src={this.props.AB2}/>}
            {this.state.expand || <img src={this.props.O1}/>}
            {this.state.expand || <img src={this.props.O2}/>}
            {this.state.expand && <h1 className='ss'>{this.props.con}</h1> }
            {this.state.expand && <h1><mark>{this.props.content}</mark></h1> }
            {this.state.expand && <h1>{this.props.content1}</h1> }
            {this.state.expand && <h1><mark>{this.props.content2}</mark></h1> }
            {this.state.expand && <h1>{this.props.content3}</h1> }
            {this.state.expand && <h1>{this.props.b}</h1> }
        </p>
      </div>
    )
  }
}

export default Layout2