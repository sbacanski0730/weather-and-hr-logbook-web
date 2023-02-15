import React from 'react';
import { Container, Box, AppBar, Typography, IconButton, Badge } from '@mui/material';

import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
	return (
		<AppBar
			position='fixed'
			sx={{
				px: 0.5,
				py: 0.5,
				boxShadow: 'none',
			}}
		>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'end',
					alignItems: 'center',
				}}
			>
				{/* <Typography variant='h5'>WH-LOGBOOK</Typography> */}
				<Box
				// sx={{ border: 1 }}
				>
					{/* TODO: set link to this icons when other pages will be ready */}
					{/* TODO: set color pallette with theme */}
					<IconButton>
						<DarkModeSharpIcon />
					</IconButton>
					<IconButton>
						<Badge badgeContent={1} color='secondary'>
							{/* <NotificationsActiveIcon /> */}
							<NotificationsIcon
							//  color='secondary'
							/>
						</Badge>
					</IconButton>
					<IconButton>
						<PersonIcon />
					</IconButton>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Navbar;
