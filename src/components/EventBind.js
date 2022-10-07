import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message:'Hello',
        }
        //this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     console.log("button click is clicked")
    //     this.setState({
    //         message:'Bye',
    //     })
    //     //console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:'GoodBye'
        })
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* There are four approaches to Bind
            1. Binding in render -> this.clickHandler.bind(this) Not recommended 
            2. Arrow function in render(line 38) -> onClick={()=> this.clickHandler()} similar to approach one
            3. Binding in class constructor(line 9) -> this.clickHandler.bind(this) recommended
            4. Using the arrow function (line19) recommended
        */}
        {/* Binding event handlers  */}
        <button onClick={this.clickHandler}>Click</button>

        {/* Binding event handlers - calling the function inside the arrow function  */}
        {/* <button onClick={()=> this.clickHandler()}>Click </button> */}


      </div>
    )
  }
}

export default EventBind