import React from 'react'
import {Container,Typography,Grid ,makeStyles, Paper} from "@material-ui/core"
import multi1 from "./img/multi1.jpg"

const useStyles=makeStyles((theme)=>({
    Container:{
        backgroundImage:`url(${multi1})`,
        backgroundSize:"cover",
        maxWidth:"100vw",
        height:"100vh",
       
    }

}));
function Login() {
    const classes=useStyles()

    return (
        <Paper className={classes.Container}>
            Login
        </Paper>
    )
}

export default Login
