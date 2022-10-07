import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         onDoublde:'',
         topic:'react'
      }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    onMouseEnterChange=()=>{
        console.log('mouse is hovering over the textarea')
    }
    onDoubleClickChange=()=>{
        this.setState({
            onDoublde:'User jst double click on the textarea'
        })
    }
    onClickClearTextButton=()=>{
        this.setState({
            comments:''
        })
    }
    onTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit= (event)=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="">UserName</label>
            <input 
                type="text" 
                value={this.state.userName} 
                onChange={this.handleUserNameChange}
            />
            <div>
                <label htmlFor="">Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange} onMouseEnter={this.onMouseEnterChange} onDoubleClick={this.onDoubleClickChange}></textarea>
            </div>
            <div>
                <button onClick={this.onClickClearTextButton}>Clear text area</button>
            </div>
            <div>
                <label htmlFor="">Topic</label>
                <select value={this.state.topic} onChange={this.onTopicChange}>
                    <option value="react">React</option>
                    <option value="anguar">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
            {/* <h1>{this.state.onDoublde}</h1> */}
        </div>
      </form>
    )
  }
}

export default Forms
