import React from 'react'
import "./SecondaryBtn.css"

function SecondaryBtn(props) {
  const {label, onClick} = props;

  return (
    <button type="button" onClick={onClick} className="secondary-btn">{label}</button>
  )
}

export default SecondaryBtn