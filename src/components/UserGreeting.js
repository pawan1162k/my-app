import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true,
        }
    }
  render() {

    return(
        this.state.isLoggedIn && <div>Welcome Pawan</div>
        // (!this.state.isLoggedIn) && <div>Welcome Guest</div>
    )

    //3rd Approach - ternary operator 
    // return (
    //     this.state.isLoggedIn?
    //     <div>Welcome Pawan</div>:
    //     <div>Welcome Guest</div>
    // )



    //2nd Approach 
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Pawan</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    // return <div>{message}</div>




    //1st Approach     if-else statement 
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Pawan</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //   <div>
    //         <div>Welcome Pawan</div> 
    //         <div>Welcome Guest</div> 
    //   </div>
    // )
  }
}

export default UserGreeting
