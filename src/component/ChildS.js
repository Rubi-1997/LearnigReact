import React, { Component } from 'react'

export default class ChildS extends Component {
    componentWillUnmount(){
        console.log(" component will unmounted")
    }
  render() {
    return (
      <div><h1>hello friends</h1></div>
    )
  }
}
