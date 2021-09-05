import React from 'react';
import News from './NEWS';
import Know from './KNOW';

const NEWS_FEED = ()=>{
    return(
        <div id="news_feed">
            <News/>
            <Know/>
        </div>
    );
}

export default NEWS_FEED;