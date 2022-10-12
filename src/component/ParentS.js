import React, { Component } from 'react'
import ChildS from './ChildS'

export default class extends Component {
    constructor(props) {
      super(props)
      this.state = {
         active:true
      }
    }
    changeState=()=>{
        this.setState({
            active:false
        })
    }
  render() {
    console.log("parent render called...")
    
    return (
      <div>
        {this.state.active?<ChildS/>:<h1>deleted</h1>}
        <button onClick={this.changeState}>clickm</button>
      </div>
    )
  }
}
