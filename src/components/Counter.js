import React,{Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            buttonState:'',
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1,
        // },()=> console.log('Callback value : ',this.state.count))
        // if(this.state.count>=0){
        //     this.setState({
        //         buttonState:'',
        //     })
        // }
        this.setState((prevState,props)=>
            ({
                count:prevState.count+1
            })
            ,
            ()=>console.log(this.state.count)
        )
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    decrement(){
        if(this.state.count<=1){
            this.setState({
            buttonState:'disabled',
        })
        }
        this.setState({
            count:this.state.count-1,
        },()=> console.log('callback value : ',this.state.count))
        console.log(this.state.count)
    }
    render(){
        return (
            <div> 
                Count - {this.state.count}
                <button onClick={()=> this.increment()}>
                    Increment
                </button>
                <button onClick={()=>this.incrementFive()}>
                    Increment by five
                </button>
                <button onClick={() => this.decrement()} disabled={this.state.buttonState}>
                    Decrement
                </button>
            </div>
        )
    }
}

export default Counter