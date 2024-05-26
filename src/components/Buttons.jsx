import React from 'react'

const Buttons = (props) => {
  return (
    <div>
        <button onClick={props.function} className="buttons">{props.name}</button>
    </div>
  )
}

export default Buttons