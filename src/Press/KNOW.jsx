import React from 'react';
import Know_card from './KNOW_CARD';


const KNOW = ()=>{

    let id = 1000;

    const know_list = [
        {
            title : 'Kneen to learn more about us?',
            link : 'Download our Backgrounder'
        },
        {
            title : 'Got media query',
            link : 'Get in touch with out press team'
        },
        {
            title : 'Join the panda family',
            link : 'Visite our career site'
        }
    ];

    return (
        <div id="know">
            {
                know_list.map((card)=>{
                    return <Know_card key={id++} link={card.link} title={card.title}/>
                })
            }
        </div>
    );
}

export default KNOW;