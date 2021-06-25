import React from 'react'
import "./news.css"
import img1 from "./img/esports1.jpg"
import img2 from "./img/esport2.jpg"
import img3 from "./img/esport3.jpg"
import img4 from "./img/esport4.jpg"
function News() {


    return (
        <div className="News">
        <div className="allnews">
        <div className="slideshow">
            <div className="slideshow-item">
                <img src={img1} alt="" />
                <div className="slideshow-item-text">
                    <h4>WORLD TOURNAMENT 2021 </h4>
                    <p>The registration to world 
                    tournament 2021 are open from 
                    27 June 2021 to 13 July 2021</p>


                </div>
            </div>
            <div className="slideshow-item">
                <img src={img2} alt=""/>
                <div className="slideshow-item-text">
                    <h4>TOURNAMENTS</h4>
                    <p>Participate in the world tournaments
                    to compete against the best</p>


                </div>
            </div>
            <div className="slideshow-item">
                <img src={img3} alt=""/>
                <div className="slideshow-item-text">
                    <h4>GTA-5 ONLINE</h4>
                    <p>The new GTA 5 is out 
                    try it out now and try the 
                    new world </p>

                </div>
            </div>
            <div className="slideshow-item">
                <img src={img4} alt=""/>
                <div className="slideshow-item-text">
                    <h4>LEAGUE OF LEGENDS</h4>
                    <p>The new duo of Gon and Killua 
                    is ready to make some action</p>


                </div>
            </div>
        </div>

        
        
        
        </div>
        </div>
    )
}

export default News;
