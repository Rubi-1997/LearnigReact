// import React from 'react'

// function Stylesheet(props) {
//     let className=props.primary? 'primary':''
//   return (
//     <div>
      
//       <h1 className={`${className} fontsize`}>Stylesheet</h1>
//       </div>
//   )
// }

// export default Stylesheet

// import React, { Component } from 'react'
// import './stylesheet.css'
// export default class Stylesheet extends Component {
//   render() {

//     return (
//       <div><h1 className='primary'>Stylesheet</h1></div>
       


//     )
//   }
// }












// inline Css example

import React, { Component } from 'react'

export default class Stylesheet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       active:false
    }
  }
  changeCss=()=>{
    this.setState({
      active:true
    });
  }

  render() {
   let obj= {
           color:"red",
           fontSize:"30vh",
           backgroundColor:"black"
            }
  // let obj1= {
  //            color:"red",
  //            backgroundColor:"black"
  //             }
  // let obj2= {
  //           fontSize:"40vh",
  //           fontFamily:"cooper"
  //           }
   if(this.state.active)
   {
    obj.backgroundColor="blue"
    
   }

    return (
      <div>
        <h1 style={obj}>Stylesheet</h1>
        {/* using multiple object of css property below this */}
        {/* <h1 style={{...obj1,...obj2}}>Stylesheet</h1> */}
        <button style={obj} onClick={this.changeCss}>Click</button>
      </div>
    )
  }
}
