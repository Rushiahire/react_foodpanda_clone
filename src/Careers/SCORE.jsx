import React from 'react';

const SCORE = (props) =>{
    return(
        <div className='score'>
        <h1>{props.numbers}</h1>
        <p>{props.title}</p>    
        </div>
    )
}
export default SCORE;