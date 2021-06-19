<<<<<<< HEAD
import React from 'react';
import {
	Container,
	Typography,
	Grid,
	makeStyles,
	Paper,
} from '@material-ui/core';
import rain from './img/rain.jpg';

const useStyles = makeStyles((theme) => ({
	Container: {
		backgroundImage: `url(${rain})`,
		backgroundSize: 'cover',
		maxWidth: '100vw',
		height: '100vh',
	},
}));
function Home() {
	const classes = useStyles();

	return <Paper className={classes.Container}>{/* Home */}</Paper>;
=======
import React from 'react'
import {Container,Typography,Grid ,makeStyles, Paper} from "@material-ui/core"
import "./style.css"


function Home() {

    return (
        <div className="Container">
        <div id="raincontainer" className="rain-container" >
        <div className="drop">
            <div className="stem">
                <div className="splash">
                
                </div>
            </div>
        </div>
            
            </div>
        </div>
    )
>>>>>>> 553dd0481c2528ece11e854ee48e8ffe5259d438
}

export default Home;
