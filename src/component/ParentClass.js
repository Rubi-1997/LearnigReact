import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {

  ParentMethod=(Std,Sur)=>{
    alert(`hello friend ${Std} ${Sur}`)
  }


  render() {
    return (
      <div>
        <ChildClass callMethod={this.ParentMethod}/>
      </div>
    )
  }
}
