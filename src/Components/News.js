import React from 'react';
import {
	Container,
	Typography,
	Grid,
	makeStyles,
	Paper,
} from '@material-ui/core';
import people2 from './img/people2.jpg';
import people from './img/people.jpg';
import './style.css';

const useStyles = makeStyles((theme) => ({
	Container: {
		// backgroundImage: `url(${people})`,
		// clipPath:"polygon(100% 0, 0% 100%, 100% 100%)",
		backgroundImage: `url(${people})`,
		// clipPath:"polygon(100% 0, 0% 100%, 100% 100%)",
		//backgroundImage: "linear-gradient(to bottom right, red,yellow)",
		maxWidth: '100vw',
		height: '100vh',
	},
}));

// IMAGE NOT SHOWING IN 2 TRIANGLES EVEN AFTER MAKING IN CSS
function News() {
	const classes = useStyles();

	return <div className='News'>{/* News */}</div>;
}

export default News;
