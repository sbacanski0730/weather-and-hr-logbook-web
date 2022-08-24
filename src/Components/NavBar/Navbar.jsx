import React, { useState } from 'react';
import logo from '../../assets/Logo Option 2.svg';
import { Link } from 'react-router-dom';
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
						<Button
							btn_style='no-outline'
							btn_size='default'
							btn_hover='underline'
						>
							Log out
						</Button>
					</div>
				</div>
				<div class='left'>
					<div className='menu-button' onClick={handleMenuOpen}>
						{sideMenuOpen ? <FaOutdent /> : <FaIndent />}
					</div>
					<div className='element'>
						<FaListUl />
						<span>Reports</span>
					</div>
					<div className='element'>
						<FaCalendarAlt />
						<span>Calendar</span>
					</div>
					<div className='element'>
						<FaPlus />
						<span>Add Raport</span>
					</div>
					<div className='element'>
						<FaUsers />
						<span>Workers</span>
					</div>
					<div className='element'>
						<FaUser />
						<span>Profile</span>
					</div>
					<div className='element'>
						<MdSettings />
						<span>Settings</span>
					</div>
				</div>
			</NavbarStyle>
		</>
	);
};

export default Navbar;
