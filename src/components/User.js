import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(false)}
      </div>
    )
  }
}

export default User

//Render props 
//The term 'render props' refer's to a technique for sharing code between react component
//using a prop whose value is a function