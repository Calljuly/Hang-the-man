import React from 'react'

const knapp  = (props) => {
    
    return (
            <button disabled={false} className="btn" onClick={props.change} value={props.Letter}>
            {props.Letter}
            </button> 
    )
}
export default knapp
