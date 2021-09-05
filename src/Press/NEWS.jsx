import React from 'react';
import News_card from './NEWS_CARD';
import image_1 from '../images/press/press_news_1.jpg';
import image_2 from '../images/press/press_news_2.jpg';
import image_3 from '../images/press/press_news_3.jpg';


const NEWS =()=>{

    let id = 900;

    const cards = [
        {
            path : image_1,
            link : 'foodpanda to build new Asia tech hub in Taiwan',
            para_text : 'Slated to begin operations in the second half 2021, the tech hub will focus on R&D in new technologies and enhancements to scale up product innovation',
        },
        {
            path : image_2,
            link : '柯市長親訪攤位揀貨初體驗  光復、松江、西湖市場首波登場 90%',
            para_text : 'Slated to begin operations in the second half 2021, the tech hub will focus on R&D in new technologies '
        },
        {
            path : image_3,
            link : 'Delivering Safe: foodpanda Introduces Insurance Packages for its Home Chefs',
            para_text : 'A collaboration with Chughtai Lab to provide .'
        }
    ];

    return (
        <div id="news">
            {
                cards.map((card)=>{
                    return <News_card key={id++} path={card.path} para_text={card.para_text}  link={card.link}/>
                })
            }
            {
                cards.map((card)=>{
                    return <News_card key={id++} path={card.path} para_text={card.para_text}  link={card.link}/>
                })
            }
        </div>
    );
}

export default NEWS;