import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
	<nav>
	    <div className='company__logo'>COMPANY NAME</div>
			<ul>
				<li>
				    <a href='/'></a>Home
				</li>
				<li>
					<a href='services'></a>Services
				</li>
				<li>
					<a href='about'></a>About
				</li>
				<li>
					<a href='contact'></a>Contact
				</li>
                <button> SIGN UP</button>
			</ul>
	</nav>
		);
}

export default Nav;