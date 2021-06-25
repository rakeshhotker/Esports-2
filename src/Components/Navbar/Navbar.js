import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import {
	Nav,
	NavbarContainer,
	MobileIcon,
	NavLogo,
	NavMenu,
	NavLinks,
	NavItem,
	NavBtn,
	NavBtnLink,
} from './NavElements';
import { animateScroll as scroll } from 'react-scroll';
import './Nav.css';
function Navbar({ toggle }) {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 60) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to='/' onClick={toggleHome}>
						RIOT
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to='Events'
								smooth='true'
								duration={500}
								spy={true}
								exact='true'
								offset={-10}
							>
								Games
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='News'
								smooth='true'
								duration={500}
								spy={true}
								exact='true'
								offset={-10}
							>
								News
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='Login'
								smooth='true'
								duration={500}
								spy={true}
								exact='true'
								offset={-10}
							>
								VR Mode
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink
							to='/signin'
							smooth='true'
							duration={500}
							spy={true}
							exact='true'
							offset={-10}
						>
							SignIn
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}

export default Navbar;
