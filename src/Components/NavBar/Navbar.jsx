import React, { useState } from 'react';
import logo from '../../assets/Logo Option 2.svg';
import { NavbarStyle } from './Navbar.style.js';
import {
	FaIndent,
	FaOutdent,
	FaListUl,
	FaCalendarAlt,
	FaPlus,
	FaUsers,
	FaUser,
} from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import Button from '../Button/Button';

const Navbar = () => {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	const handleMenuOpen = () => setSideMenuOpen(!sideMenuOpen);
	return (
		<>
			<NavbarStyle>
				<div class='top'>
					<div class='logo-container'>
						<img src={logo} alt='' />
					</div>
					<div id='logout-container'>
						<Button>Log out</Button>
						{/* <button>Logout</button> */}
					</div>
				</div>
				<div class={`left ${sideMenuOpen ? 'open' : 'closed'}`}>
					<div className='menu-button' onClick={handleMenuOpen}>
						{sideMenuOpen ? <FaOutdent /> : <FaIndent />}
					</div>
					<div className='element'>
						<FaListUl />
						<p>Reports</p>
					</div>
					<div className='element'>
						<FaCalendarAlt />
						<p>Calendar</p>
					</div>
					<div className='element'>
						<FaPlus />
						<p>Add Raport</p>
					</div>
					<div className='element'>
						<FaUsers />
						<p>Workers</p>
					</div>
					<div className='element'>
						<FaUser />
						<p>Profile</p>
					</div>
					<div className='element'>
						<MdSettings />
						<p>Settings</p>
					</div>
				</div>
			</NavbarStyle>
		</>
	);
};

export default Navbar;
