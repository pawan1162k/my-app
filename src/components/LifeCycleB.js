import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Pawan',
        }
        console.log('LifeCycleB constructor is called')
    }


    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }


    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

  render() {

    console.log('LifeCycleB render')
    return (
        <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB