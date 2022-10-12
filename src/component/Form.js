import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)
      
        this.state={
           Username:'',
           comments:'',
           Option:''
        }
      }
   
      change=(event)=>{
       this.setState({
           Username:event.target.value
       })
      }
      Commentchange=(event)=>{
        this.setState({
            comments  :event.target.value
        })
      }
      changeOption=(event)=>{
        this.setState({
            Option :event.target.value
        })
      }
  render() {
   
  
    return (
      <form>
        <div>
            <label>Username:</label>
            <input type="text"
            value={this.state.Username}
            onChange={this.change} ></input>
        </div>
        <div>
        <label>comments:</label>
            <textarea
            value={this.state.comments}
            onChange={this.Commentchange} ></textarea>
        </div>
        <div>
        <label>Option:</label>
            <select value={this.state.Option} onChange={this.changeOption}>
                <option>React</option>
                <option>Javascript</option>
                <option>Theory</option>
            </select>
        </div>
      </form>

    )
  }
}

export default Form