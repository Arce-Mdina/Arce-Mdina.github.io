import React from 'react'

const Link = (props) => {
  return (
    <>
        <a style={props.styles} onClick={props.function}>{props.content}</a>
    </>
  )
}

export default Link