import React, { PureComponent,Component } from 'react'
import MemoEx from './MemoEx'
import ParentS from './ParentS'

export class Pure extends Component {
    constructor(props) {
      super(props)
      this.state = {
         data:"Hello"
      }
    }
    changement=()=>{
        this.setState({
            data:"Dear"
        })
    }
  render() {
    console.log("render called....")
    return (
      
      <div>
       <MemoEx name={this.state.data}/>
       <h1>{this.state.data}</h1>
      <button onClick={this.changement}>click button</button>
      </div>
    )
  }
}

export default Pure