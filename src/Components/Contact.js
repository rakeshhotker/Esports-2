import React from 'react';
import home2 from './img/home2.mp4';

function Contact() {

	return (
		<div className="contact">
			<video autoPlay loop muted width='100%' height='100%'>
				<source src={home2} type='video/mp4' />
			</video>
			<div>
				
			</div>
		</div>
	);
}

export default Contact;
