import React from 'react';
import career from '../images/career.jpg';
import world from '../images/world.jpg';

const HERO = () =>{
    return(
        <>
        <div id="hero">
        <img src={career} alt="image" />
            <h1>‘‘Bringing good food into your everyday’</h1>
            <p>
            …that’s our mission at foodpanda. Whether it’s by delivering food on our signature pink bikes, providing insights into the newest food trends, or showcasing local favorite restaurants, we’re on a mission to redefine how food, people, culture and tech are connected.
            <br ></br>
            With over 40 nationalities and 20 languages spoken across our markets, we pride ourselves on our focus on inclusion and diversity. We are able to exchange and bring to the table the best practices (and food!) from each corner of the world. 
            </p>
        </div>  
        </>
    )
}
export default HERO;