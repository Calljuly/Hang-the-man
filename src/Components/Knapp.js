import React from 'react'

const knapp  = (props) => {
    return (
            <div className="btn" onClick={props.change}>
            {props.Letter}
            </div> 
    )
}
export default knapp
