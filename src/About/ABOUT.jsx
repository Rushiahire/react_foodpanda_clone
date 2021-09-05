import React from 'react';
import How from './HOW';
import Our_mission from './OUR_MISSION';
import Map from './MAP';

const ABOUT = ()=>{
    return (
        <>
        <div id="about_page">
            <h1>
                ABOUT US
            </h1>
        </div>
            <p id="about_para">
                For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!                
            </p>
            <How/>
            <Our_mission/>
            <Map/>
        </>
    )
}

export default ABOUT;