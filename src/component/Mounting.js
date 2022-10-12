import React, { Component } from 'react'

export default class Mounting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          first:"hello"
       }
       console.log("calling by constructor")
     }
     componentDidMount(){
        console.log("calling by componentDidMount")
     }
  static getDerivedStateFromProps(props,state){
     console.log("calling by getDerivedStateFromProps ")
     return null
   }
  render() {
    console.log("calling by render")
    return (
      <div><h1>Mounting</h1></div>
    )
  }
}

