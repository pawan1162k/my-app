import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props){
        super(props)
        this.state ={
            dis:'',
        }
    }
    clickHandler(){
        console.log("Clicked the button")
        if(this.state.dis===''){
            this.setState({
                dis:'disabled',
            });
        }else{
            this.setState({
                dis:'',
            });
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.clickHandler()}>Click me</button>

        {/* To make the below state button work un-comment the code in clickHandler function*/} 
        <button disabled={this.state.dis}>State</button>
      </div>
    )
  }
}

export default ClassClick
