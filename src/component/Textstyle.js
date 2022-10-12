// import React, { Component } from 'react'

// export default class Textstyle extends Component {
//   render() {
//     return (
//       <div><h1 style={{color:"red"}}>Textstyle</h1></div>
//     )
//   }
// }



// import React, { Component } from 'react'

// export default class Textstyle extends Component {
//   render() 
//   {
//     let obj={
//         backgroundColor:"yellow",
//         fontSize:"34px",
//         color:"blue"
//     }
//     let obj1={
//         fontFamily:"cooper"
//     }
//     return (
//       <div><h1 style={{...obj,...obj1}}>Textstyle</h1></div>
//     )
//   }
// }





import React, { Component } from 'react'

export default class Textstyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:false
      }
    }
    changeColor=()=>{
        this.setState({
            first:true   
        })
    }
    
  render() 
  {
    let obj={
        backgroundColor:"yellow",
        fontSize:"34px",
        color:"blue"
    }
    
    if(this.state.first){
        obj.backgroundColor="blue"
    }

return (
        <div><h1 style={obj}>Textstyle</h1>
         <button onClick={this.changeColor}>click for css change</button> 
          </div>
        )
      }
    }
    
    