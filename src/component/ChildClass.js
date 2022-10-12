// passing Methods as props in react using function  component


import React from 'react'

export default function ChildClass(props) {
  return (
    <div>
       <button onClick={()=>props.callMethod('Suresh','Kumar')}>click</button> 
    </div>
  )
}



// passing Methods as props in react using class component


// import React, { Component } from 'react'

// export default class ChildClass extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={()=>this.props.callMethod('Suresh','Kumar')}>click</button>
//       </div>
//     )
//   }
// }
