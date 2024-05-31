import React from 'react'

const Overlay = (props) => {
  return (
    <>
        {props.type && <div className="overlay-background" onClick={props.function}></div>}

        {props.type && (
        <div className="overlay">
            {/* Overlay content */}
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
              <h2 className="overlay-heading">{props.heading}</h2>
              <div className="scrollable-content">
                  
                {props.content}
                  
              </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Overlay