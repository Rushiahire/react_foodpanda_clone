import React from 'react';

const ADVANTAGES = (props) =>{
    return(
        <div className="advantages">
            <img src={props.path} alt="images" />
            <div>
            <h3>{props.title}</h3>
            <p>{props.numbers}</p>
            </div>
        </div>
    )
}
export default ADVANTAGES;