import React, { Component } from 'react'
import './ExternalCss.css'

export default class ExternalCss extends Component {
  render() {
    let x=this.props.check? 'myColor': 'fontSize'
    return (
      <div>
        <h1 className={x}>ExternalCss</h1>
        </div>
    )
  }
}
 