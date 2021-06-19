import React from 'react'
import {Container,Typography,Grid,makeStyles,Paper} from "@material-ui/core"
import home2 from "./img/home2.mp4"
const useStyles=makeStyles((theme)=>({
    Container:{
        
        // maxWidth:"100vw",
        // height:"100vh",
       
    },


}));


function Contact() {
    const classes=useStyles()
    return (
        <Paper className={classes.Container}>
        <video autoPlay loop muted width="100%" height="100%">
            <source src={home2} type="video/mp4"/>
        </video>  
        <div >
            I NEED THIS ON THE VIDEO OR CREATE A DIV IN WHICH I WRITE OR MAKE ANOTHER DIV THEY CAN COME ABOVE THE VIDEO 
        </div>
        </Paper>
    )
}

export default Contact
