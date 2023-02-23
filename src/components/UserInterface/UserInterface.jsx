import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CustomTopbarButton from '../styled-components/CustomTopbarButton.jsx';
import CustomTopbarIconButton from '../styled-components/CustomTopbarIconButton';
import CustomSidebarListItem from '../styled-components/CustomSidebarListItem';
import CustomColoredSidebarDrawer from '../styled-components/CustomColoredSidebarDrawer';

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
	const [notification] = useState(0);

	return (
		<>
			{/* Topbar */}
			<AppBar
				position='fixed'
				sx={{
					backgroundColor: 'primary.main',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mx: 1,
						my: '4px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<CustomTopbarIconButton
							size='24px'
							sx={{
								mr: 3,
							}}
							onClick={() => {
								setIsOpen(true);
							}}
						>
							<MenuIcon />
						</CustomTopbarIconButton>
						<Typography
							variant='h4'
							color='text.primary'
							sx={{ userSelect: 'none' }}
						>
							WH-Logbook
						</Typography>
					</Box>
					<Stack direction='row' spacing={1}>
						<CustomTopbarIconButton>
							<DarkModeSharpIcon />
						</CustomTopbarIconButton>
						<CustomTopbarIconButton>
							{notification > 0 ? (
								<Badge max={10} badgeContent={notification} color='info'>
									<NotificationsActiveIcon />
								</Badge>
							) : (
								<NotificationsIcon />
							)}
						</CustomTopbarIconButton>

						<CustomTopbarButton
							variant='outlined'
							sx={{
								display: 'flex',
								gap: '10px',
								borderRadius: '40px',
							}}
						>
							<LogoutIcon />
							<Typography>Logout</Typography>
						</CustomTopbarButton>
					</Stack>
				</Box>
			</AppBar>

			{/* Sidebar */}
			<CustomColoredSidebarDrawer
				anchor='left'
				open={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
				PaperProps={{
					elevation: 12,
				}}
				SlideProps={{
					sx: {
						backgroundColor: 'primary.main',
					},
				}}
			>
				<Box sx={{ width: '240px' }}>
					<List>
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
						].map(({ name, icon, path }, index) => {
							return (
								<React.Fragment key={index}>
									<CustomSidebarListItem
										lassName='hereIAm'
										disablePadding
									>
										<ListItemButton
											divider={true}
											onClick={() => {
												setIsOpen(false);
											}}
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
									</CustomSidebarListItem>
								</React.Fragment>
							);
						})}
					</List>
				</Box>
			</CustomColoredSidebarDrawer>
		</>
	);
};

export default UserInterface;
