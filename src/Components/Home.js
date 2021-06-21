import React from 'react';
import "./style.css";
import {motion,	AnimatePresence} from "framer-motion"

function Home() {


	return (
		// DELETED THE WRAPPER AND ADDED DROPS PROPERLY + maked a function in index.html
		<div className="body">
			<motion.div className="main"
			animate={{ scale: 1.1 }}
  			transition={{ ease: "easeIn", duration:4,yoyo:Infinity }}>
			<div className="all-cards">
			
			<div className="card1">
			{/* I WANT THIS TEXT ON MIDDLE OF HOME PAGE  */}
					GOD OF WAR: IN MOERN WORLD
					
				</div>


				
					
			</div>
			</motion.div>
			
		</div>
	);
}

export default Home;
