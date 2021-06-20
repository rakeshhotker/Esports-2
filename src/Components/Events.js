import React from 'react'
import { Container, Typography, Grid, makeStyles, Paper } from "@material-ui/core"
import watchdogs from "./img/watchdogs.jpg"
import "vanilla-tilt";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  Container: {

    backgroundImage: `url(${watchdogs})`,
    backgroundSize: "cover",
    maxWidth: "100vw",
    height: "100vh",

  },
}));
function Events() {
  const classes = useStyles()

  return (
    <div className={classes.Container}>

      <div className="all">
        <div className="container">
          <div className="card" id="card-one" data-tilt data-tilt-scale="1.1">
            <div className="content">
              
              <h3>FORTNITE </h3>
              <p>Have you been to a party where friends invade you 
              </p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>

          <div className="card" id="card-two"  data-tilt data-tilt-scale="1.1">
            <div className="content">
              
              <h3>SUICIDE SQUAD</h3>
              <p>There are as crazy people like you</p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
          <div data-tilt className="card"  id="card-three"  data-tilt-scale="1.1">
            <div className="content">
              
              <h3>CYBERPUNK</h3>
              <p>The city where you can't survive</p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
          <div data-tilt className="card" id="card-four"  data-tilt-scale="1.1">
            <div className="content">
              
              <h3>IT-2</h3>
              <p>What extend can you go to save your family</p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
          <div data-tilt className="card"  id="card-five"  data-tilt-scale="1.1">
            <div className="content">
              
              <h3>WATCHDOGS-2</h3>
              <p>You want a gansta city to rule ?</p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
          <div data-tilt className="card"  id="card-six"  data-tilt-scale="1.1">
            <div className="content">
              
              <h3>ARTHUR U</h3>
              <p>Want some action old time games ?</p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
          <div data-tilt className="card"  id="card-seven"  data-tilt-scale="1.1">
            <div className="content">
              
              <h3>MARTIP</h3>
              <p>A space game into a different world </p>
              <a href="www.google.com">Play now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Events;
