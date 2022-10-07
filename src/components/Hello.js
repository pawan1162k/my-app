import React from "react";



// const Hello = () => {
//         return (
//                 <div>
//                    <h1>Hello Pawan</h1> 
//                 </div>
//             )
//         }
        

//******JSX version ********

const Hello =()=>{
    return React.createElement('div',
    {id:'hello'},
    React.createElement('h1',null,'Hello Pawan from JSX')
    )
}
export default Hello 