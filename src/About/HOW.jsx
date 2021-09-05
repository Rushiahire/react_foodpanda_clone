import React from 'react';
import mob from '../images/mob.svg';
import cycle from '../images/cycle.svg';
import bag from '../images/bag.svg';
import About_link from './ABOUT_LINK';


const HOW = () =>{
    let id = 400;
    const img_sources = [
        {
            path : mob ,
            title : 'Order'
        },
        {
            path : cycle,
            title : 'Relax'
        },
        {
            path : bag ,
            title : 'Enjoy'
        }
    ]

    return(
        <>
            <h1 id="how_h1">HOW IT WORKS</h1>
            <div id="about_link">
                {
                    img_sources.map((content)=>{
                        return <About_link img_src={content.path} title ={content.title} key={id++}/>
                    })
                }
            </div>
        </>
    )
}

export default HOW;