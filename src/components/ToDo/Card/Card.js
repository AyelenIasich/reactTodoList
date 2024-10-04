import React from 'react'
import "./Card.css"

function Card({children}) {
  return (
    <div className="bg-light-card my-3 px-4 px-sm-5 py-3">{children}</div>
  )
}

export default Card