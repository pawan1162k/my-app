import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE></ComponentE>
      </div>
    )
  }
}

export default ComponentC

//1.Create the context
//2.Provide a context value
//3.Consume the context value
