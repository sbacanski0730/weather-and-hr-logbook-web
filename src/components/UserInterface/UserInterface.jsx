import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
// import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';

const UserInterface = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [notification] = useState(3);

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	return (
		<>
			{/* Topbar */}
			<AppBar position='fixed'>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<IconButton
							size='24px'
							sx={{ color: 'white', mr: 3 }}
							onClick={handleOpen}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h3'>WH-Logbook</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<IconButton
							sx={{
								color: 'white',
								'&:hover': {
									backgroundColor: 'rgba(0, 0, 0, 0.4);',
								},
							}}
						>
							<DarkModeSharpIcon />
						</IconButton>
						<IconButton
							sx={{
								color: 'white',
								'&:hover': {
									backgroundColor: 'rgba(0, 0, 0, 0.4);',
								},
							}}
						>
							{notification > 0 ? (
								<Badge badgeContent={notification} color='secondary'>
									<NotificationsActiveIcon />
								</Badge>
							) : (
								<NotificationsIcon />
							)}
						</IconButton>

						<Button
							variant='outlined'
							sx={{
								color: 'white',
								display: 'flex',
								gap: '10px',
								borderRadius: '40px',
								// border: '1px solid white',
								'&:hover': {
									backgroundColor: 'rgba(0, 0, 0, 0.4);',
								},
							}}
						>
							<LogoutIcon />
							<Typography variant='h4'>Logout</Typography>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>

			{/* Sidebar */}
			<Drawer
				anchor='left'
				open={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
			>
				<Box sx={{ width: '240px' }}>
					<List
						sx={{
							// border: 1,
							mt: 5,
						}}
					>
						{[
							{
								name: 'Reports',
								icon: <FolderIcon sx={{ fontSize: '30px' }} />,
								path: '/reports',
							},
							{
								name: 'Add Report',
								icon: <AddIcon sx={{ fontSize: '30px' }} />,
								path: '/add-report',
							},
							{
								name: 'Calendar',
								icon: <CalendarMonthIcon sx={{ fontSize: '30px' }} />,
								path: '/calendar',
							},
							{
								name: 'Employees',
								icon: <PersonIcon sx={{ fontSize: '30px' }} />,
								path: '/employees',
							},
							{
								name: 'Settings',
								icon: <SettingsIcon sx={{ fontSize: '30px' }} />,
								path: '/settings',
							},
						].map(({ name, icon, path }) => {
							return (
								<ListItem
									disablePadding
									sx={
										{
											// border: '1px solid red',
										}
									}
								>
									<ListItemButton
										divider={true}
										onClick={handleClose}
										sx={
											{
												// border: '1px solid green',
											}
										}
									>
										<Link
											to={path}
											component={ReactLink}
											underline='none'
											sx={{ display: 'flex' }}
										>
											<ListItemIcon
												sx={{
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												{icon}
											</ListItemIcon>
											<ListItemText
												primary={name}
												primaryTypographyProps={{
													fontSize: '22px',
												}}
											/>
										</Link>
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default UserInterface;
