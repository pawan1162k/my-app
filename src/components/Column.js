import React from 'react'

function Column() {
    // const items=[
    //     {
    //         id:1,
    //         title:'Pawan chaudhari'
    //     }
    // ]
  return (
    <React.Fragment>
        {/* {
            items.map((item,id)=> (
                <React.Fragment key={id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>    
            ))
        } */}
      <td>Name</td>
      <td>Pawan</td>
    </React.Fragment>
  )
}

export default Column
