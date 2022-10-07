import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Pawan'
      }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'Pawan'
            })
        }, 2000)
    }
  render() {
    console.log("********Parent Component****")
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp

//Regular Component
//A regular component does not implement the shouldComponentUpdate
//method.It always return true by default

//Pure component 
//A pure component on the other hand implements shouldComponentUpdate 
//with a shallow props and state comparison


