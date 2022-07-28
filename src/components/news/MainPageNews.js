import React from "react";
import image from '../../images/main-head.jpg';

import NewsHeadSmall from '../news/NewsHeadSmall';
import NewsListSmall from '../news/NewsListSmall';


export default function MainPageNews()
{
    return(
        <div className="main-page-news">
            <NewsHeadSmall 
                src={image}
                title="Wygrywamy z Kątami Wrocławskimi 34:29!"
                text="Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  "
            />
            <NewsListSmall 
                buttonText="Wszystkie aktualności"
                buttonFunction="redirect"
                />
        </div>
    )
}