//import React from 'react'


//Normal function 
// function Greet(){
//     return <h1>Hello Pawan from normal function </h1>
// }
//Arrow function 


//Named export 
//export const Greet =() => <h1>Hello Pawan from Arrow function </h1>

//Default export
// const Greet =props => {
//     console.log(props.name);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName} from Arrow function 1</h1>
//             {props.children}
//         </div>
//     )
// } 

//Alternate way - destructuring props

const Greet =(props) => {
    const {name,heroName,children} = props 
    console.log(name);
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName} from Arrow function 1</h1>
            {children}
        </div>
    )
} 

export default Greet
