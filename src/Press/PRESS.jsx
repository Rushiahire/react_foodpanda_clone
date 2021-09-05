import React from 'react';
import News_feed from './NEWS_FEED';

const PRESS = ()=>{
    let id=900;
    const story = [
        'All stories','Business','Tech','Riders','Merchants','Campaigns','Community'
    ];
    return (
        <>
            <div id="press_part1">
                <h1>Discover stories from foodpanda</h1>
                <h2>FROM KARACHI TO KANCHANABURI</h2>
            </div>
            <div id="stories">
                <div id="stories_1">
                {
                    story.map((content)=>{
                        return <a href="#" key={id++}>{content}</a>
                    })
                }
                </div>
                <select name="country" id="country">
                    <option value="">All Countries</option>
                    <option value="">Bangladesh</option>
                    <option value="">Japan</option>
                    <option value="">Hongkong</option>
                    <option value="">Thailand</option>
                    <option value="">Singapore</option>
                </select>
            </div>
            <News_feed/>
        </>
    )
}

export default PRESS;
