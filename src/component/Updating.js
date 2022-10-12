import React, { Component } from 'react'

export default class Updating extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:"hello"
    }
    console.log("contructor called...")
  }
  changes=()=>{
    this.setState({
      first:"Kumar"
    })
    console.log("changes() called")
  }
   static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps  called")
    console.log(props)
    return null
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate called")
    console.log(nextProps);
    console.log(nextState)
    return false
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate")
    console.log(prevProps)
    console.log(prevState)
    return "hello"
  }
   componentDidUpdate(prevProps,prevState,snapShot){
    console.log("componentDidUpdate called ..")
    console.log(prevProps)
    console.log(prevState)
    console.log(snapShot)
   }
  render() {
    console.log("render called")
    return (
      <div><h1>{this.state.first}</h1>
      <button onClick={this.changes}>click</button></div>
    )
  }
}
