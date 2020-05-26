import React from 'react'

const guesses = (props) => {
    
    return (
        <div>
            <p>{props.word}</p>
            <p>Antal gissningar : {props.guess}</p>
        </div>
    )
}
export default guesses
