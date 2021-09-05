import React from 'react';
import Advantages from './ADVANTAGES';
import globe from '../images/globe.svg';
import mob from '../images/mob.svg';
import cycle from '../images/cycle.svg';
import bike from '../images/bike.svg';

const MAP = () =>{
    let id = 400
    const advantages = [
        {
            path : globe,
            title : 'COUNTRIES',
            numbers : '12'
        },
        {
            path : mob,
            title :'RESTAURANTS',
            numbers : '115,000+'
        },
        {
            path : cycle,
            title : 'BIKES',
            numbers : '80,000+'
        },
        {
            path : bike,
            title : 'CITIES',
            numbers : '400+'
        }
    ]
    return(
        <div id="map">
            <h1>
                WHERE WE ARE
            </h1>
            <div id="map_img">
            </div>
            <div id="map_advantage">
            {
                advantages.map((advantage)=>{
                    return <Advantages path ={advantage.path} title ={advantage.title} numbers={advantage.numbers} key={id++} />
                })
            }
            </div>
        </div>
    )
}
export default MAP;