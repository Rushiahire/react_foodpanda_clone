import React from 'react';
import Score from './SCORE';

const WORLD = () =>{
    let id = 700;
    const worlds = [
        {
            numbers : '8000+',
            title : 'EMPLOYEES'
        },
        {
            numbers : '12',
            title : 'LOCATIONS'
        },
        {
            numbers : '15+',
            title : 'NATIONALITIES'
        },
        {
            numbers : '35+',
            title : 'LANGUAGES SPOKEN'
        }
    ];
    return(
        <div id="world">
            <h1 id="world_h1">A WORLD OF OPPORTUNITIES</h1>
            <div id="world_div">
            {
                worlds.map((content)=>{
                    return <Score numbers={content.numbers} title ={content.title} key={id++} />
                })
            }
            </div>
        </div>
    )
}
export default WORLD;