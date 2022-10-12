import React, { Component } from 'react'
import ChildRef from './ChildRef'

export default class ParentRef extends Component {
    constructor(props) {
      super(props)
    //   creating reference
      this.inputRef=React.createRef();
    }

// changement=()=>{
//     console.log(this.inputRef.current.value)
// }

  render() {
    return (
      <div><h1>ParentRef</h1>
      <ChildRef ref={this.inputRef}/>
      {/* <button  onClick={this.changement}>update value</button> */}
      <button  onClick={this.inputRef.current.focus()}>update value</button>
      </div>
    )
  }
}
                    

