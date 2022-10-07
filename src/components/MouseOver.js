import React, { Component } from 'react'



class MouseOver extends Component {
    constructor(){
        super()
        this.state={
            printMessage:'',
        }
        this.overHandler= this.overHandler.bind(this)
        this.DragHandler=this.DragHandler.bind(this)
        this.DragOverHandler=this.DragOverHandler.bind(this)
        this.DroppedHandler=this.DroppedHandler.bind(this)
    }
    overHandler(){
        console.log("mouse is here")
        if(this.state.printMessage==='  *       '){
            this.setState({
                printMessage:'Mouse is hovered',
            })
        }else{
            this.setState({
                printMessage:'  *       ',
            })
        }
    }
    DragHandler(){
        console.log('User is dragging the componenet')
    }
    DragOverHandler(){
        console.log('User dragging the componenet here')
    }
    DroppedHandler(){
        console.log('User Dropped the component')
    }
  render() {
    return (
      <div>
        <h1>{this.state.printMessage}</h1>
        <button onMouseOver={this.overHandler}>Mouse over</button>
        <button draggable='true' onDrag={this.DragHandler} onDrop={this.DroppedHandler}>Drag me</button>
        <button onDragOverCapture={this.DragOverHandler}> Drop here</button>
      </div>
    )
  }
}

export default MouseOver