import React from 'react';
import multi1 from './img/multi1.jpg';
// MATERIAL-UI IS REMOVED = PAPER, MAKESTYLES FUNCTION REMOVED 
import './style.css';
function Login() {

	return <div 
	style={{
		backgroundImage: `url(${multi1})`,
		backgroundSize: 'cover',
		maxWidth: '100vw',
		height: '100vh',}}>
{/* MATERIAL UI REMOVED */}
	</div>;
}

export default Login;
