import React from 'react';

const ABOUT_LINK= (props) =>{
    return(
        < div >
        <a href=""><img src={props.img_src} alt="error" /></a>
        <h2>{props.title}</h2>
        </div>
    )
}
export default ABOUT_LINK;