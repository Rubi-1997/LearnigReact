// make a counter
import React, { Component } from "react";

 class Counter extends Component{

    constructor (){
        super()
      this.state={
        count:0
      }
    }
    increament(){
        this.setState({
            
                count: this.state.count+1
            
        }
        )
    }
    decreament(){
        this.setState({
            count: this.state.count-1
        })
    }
  render(){
    return(
        <div>
            <button onClick={()=>{this.increament()}}>Increase</button>
           
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{this.decreament()}}>Decrease</button>
        </div>
    )
  }

 }

 export default Counter;