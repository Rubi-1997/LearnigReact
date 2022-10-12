import React, { Component } from 'react';
class ClassClicked extends Component{

    clicked(){
        console.log("button has cliked by class")
    }
    render(){
        return(
           <div>
            {/* class  event handling access using 'this' keyword */}
            <button onClick={this.clicked}>button click</button>  
           </div>
        )
    }

}
export default ClassClicked 