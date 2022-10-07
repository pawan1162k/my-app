import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Pawan',
        }
        console.log('LifeCycleA constructor is called')
    }


    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }


    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Codeevolution'
        })
    }
  render() {

    console.log('LifeCycleA render')
    return (
        <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA