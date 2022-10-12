import React,{Component} from "react";

class Welcome extends Component{
    render(){
        // using destructuring
        const {name,heroname}=this.props
        return(<p> {name}there is a problem which make you strong; you are a {heroname}</p>
        )
    }
}
export default Welcome;
