import React from 'react'
import ToDoIcons from './ToDoIcons'

function StarSuccessIcon() {
  return (
    <ToDoIcons
        type="star"
        color="green"
        width={150}
        height={150}
        style={{display:"flex", justifyContent: "center", alignItems:"center"}}
    />
  )
}

export default StarSuccessIcon