import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome visitor',
            buttonName:'Subscribe',
        }
    }
    ChangeMessage(){
            if(this.state.buttonName==='Subscribe'){
            this.setState({
                message:'Thank you for Subscribing'
            })
            this.setState({
                buttonName:'Go to Home page'
            })
        }else{
            this.setState({
                message:'Welcome visitor'
            })
            this.setState({
                buttonName:'Subscribe'
            })
        }
    }

    render(){
        return(
            <div> 
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.ChangeMessage()}>
                    {this.state.buttonName}
                </button>
            </div>
        )
    }
}
export default Message;