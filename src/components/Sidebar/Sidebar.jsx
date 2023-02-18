import React, { useState } from 'react';
import { Box, Typography, Drawer, Icon, SvgIcon, Divider } from '@mui/material';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
} from '@mui/material';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
	return (
		<>
			<Drawer
				variant='permanent'
				anchor='left'
				// sx={{
				// 	width: '40px',
				// 	whiteSpace: 'nowrap',
				// }}
			>
				<Box
					sx={{
						// width: '240px',
						// whiteSpace: 'nowrap'
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						py: 2,
						// border: 1,
					}}
				>
					<SvgIcon sx={{ fontSize: '34px' }}>
						<BookOutlinedIcon />
					</SvgIcon>
					<Typography
						// variant='h3'
						sx={{ fontSize: '34px' }}
					>
						Logbook
					</Typography>
				</Box>
				<Divider />
				<List>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<FolderIcon />
							</ListItemIcon>
							<ListItemText primary='Reports' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<AddIcon />
							</ListItemIcon>
							<ListItemText primary='Add Reports' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<CalendarMonthIcon />
							</ListItemIcon>
							<ListItemText primary='Calendar' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary='Employees' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default Sidebar;
