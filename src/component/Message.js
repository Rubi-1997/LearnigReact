import React,{Component} from "react";

class Message extends Component{
    constructor (){
      super()
    //   use for binding
    //   this.checkMessage=this.checkMessage.bind(this)
      this.state={
        message:'Welcome Visitor'
      }


    }
    checkMessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }



    render(){
        return (
            <div>
           <h1>{this.state.message}</h1>
           <button onClick={()=>this.checkMessage()}>subscribe</button>
            {/* use for binding */}
           {/* <button onClick={this.checkMessage}>subscribe</button> */}

            </div>
        )

        
    }
}

export default Message;