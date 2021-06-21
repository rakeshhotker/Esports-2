import React from 'react';
import "./style.css";
import {motion} from "framer-motion"

function Home() {

	return (
		<>
		<div className="body">
		<div className="main"></div>
		</div>
		{/* ADDED MOTION ON HOME PAGE - VARUN */}
			<motion.div 
			initial={{opacity:0}}
    		animate={{opacity:.6}}
    		transition={{duration:10,yoyo:Infinity}}
			className="another1">
			</motion.div>			
		</>
	);
}
export default Home;
