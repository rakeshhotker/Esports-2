import React from 'react'
import {Container,Typography,Grid ,makeStyles, Paper} from "@material-ui/core"
import people2 from "./img/people2.jpg"
import people from "./img/people.jpg";
import "./style.css"



// IMAGE NOT SHOWING IN 2 TRIANGLES EVEN AFTER MAKING IN CSS 
function News() {


    return (
        <div className="News">
            <div class="hero-container">
  <a>
    <img class="hero-image top-right" src={people2}/>
  </a>
  <a>
    <img class="hero-image bottom-left" src={people}/>
  </a>
</div>

        </div>
    )
}

export default News