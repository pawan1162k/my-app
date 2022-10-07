import React, { Component } from 'react'


/* 
Error boundaries are react component that catch JavaScript error in their child component tree,
log those errors, and display a fallback ui

A class component becomes an Error Boundary by defining either or both of 
getDerivedStateFromError and componentDidCatch lifecycle methods.


*/

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false,
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true,
        }
    }

    componentDidCatch(error,info){
        console.log(error+" "+info);
    }
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }else{
        return this.props.children
    }
  }
}

export default ErrorBoundary