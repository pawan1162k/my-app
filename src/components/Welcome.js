import React,{Component} from "react";


class Welcome extends Component{
    render(){

        //Destructure the props here
        const {name,heroName} = this.props

        //Destructure the state
        //const {state1,state2} = this.state
        
        //Props are immutable
        return (
            // <h1>
            //     Welcome {this.props.name} a.k.a {this.props.heroName}
            // </h1>
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default Welcome 