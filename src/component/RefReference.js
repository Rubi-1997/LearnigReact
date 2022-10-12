import React, { Component } from 'react'

export default class RefReference extends Component {
    constructor(props) {
      super(props)
    
      this.userref=React.createRef()
         
      }
      focusRef=()=>{
        // console.log("show the result")
        this.userref.current.style.color="red"
        this.userref.current.style.background="black"
        this.userref.current.focus()
      }

  render() {
    return (
      <div>
        <h1>RefReference</h1>
        <input ref={this.userref} type="text"></input>
        <button onClick={this.focusRef}>Click here</button>
    </div>
    )
  }
}