import React from 'react'
import {Container,Typography,Grid ,makeStyles, Paper} from "@material-ui/core"
import watchdogs from "./img/watchdogs.jpg"

const useStyles=makeStyles((theme)=>({
    Container:{
        backgroundImage: `url(${watchdogs})`,
        backgroundSize:"cover",
        maxWidth:"100vw",
        height:"100vh",
       
    }

}));
function Events() {
    const classes=useStyles()

    return (
        <Paper className={classes.Container}>
            Events
        </Paper>
    )
}

export default Events