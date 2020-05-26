import React from 'react'

const knapp  = (props) => {
    
    return (
            <button disabled={false} className="btn" onClick={props.change}>
            {props.Letter}
            </button> 
    )
}
export default knapp
