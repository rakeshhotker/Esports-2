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
		width: '100%',
		height: '100vh',
	},
}));
function Home() {
	const classes = useStyles();

	return (
		<Paper className={classes.Container}>
			{
				//this is a container wrapping around multiple rain drops
				<div className='raincontainerWrap'>
					<div className='Container'>
						<div id='raincontainer' className='rain-container'>
							<div className='drop'>
								<div className='stem'>
									<div className='splash'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='Container'>
						<div id='raincontainer' className='rain-container'>
							<div className='drop'>
								<div className='stem'>
									<div className='splash'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='Container'>
						<div id='raincontainer' className='rain-container'>
							<div className='drop'>
								<div className='stem'>
									<div className='splash'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</Paper>
	);
}

export default Home;
