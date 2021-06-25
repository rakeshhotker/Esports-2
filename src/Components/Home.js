import React from 'react';
import { useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/index';
import Login from './Login';
import News from './News';
import Fotter from "./Fotter"
import Events from './Events';

function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<div className='body'>
				<div className='main'></div>
			</div>
			{/* ADDED MOTION ON HOME PAGE - VARUN */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.6 }}
				transition={{ duration: 10, yoyo: Infinity }}
				className='another1'
			></motion.div>
			<Events />
			<News />
			<Login />
			<Fotter /> {/*footer is in home page*/}
		</>
	);
}
export default Home;
