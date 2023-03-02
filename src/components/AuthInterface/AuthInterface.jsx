import React, { useContext } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { ThemeContext } from '../../App';

import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeIcon from '@mui/icons-material/LightMode';

import CustomTopbarIconButton from '../styled-components/CustomTopbarIconButton';
import CustomTopbarButton from '../styled-components/CustomTopbarButton';

const AuthInterface = () => {
	const { themeMode, toggleTheme } = useContext(ThemeContext);

	return (
		<AppBar
			position='fixed'
			sx={{
				backgroundColor: 'primary.main',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'center',
				py: '3px',
				px: 1,
			}}
		>
			<Stack direction='row' spacing={1}>
				<CustomTopbarIconButton
					onClick={toggleTheme}
					size='small'
					sx={{
						px: '1px',
						py: '1px',
					}}
				>
					{themeMode === 'dark' ? <DarkModeSharpIcon /> : <LightModeIcon />}
				</CustomTopbarIconButton>
				<CustomTopbarButton sx={{ my: '1px', mx: '2px' }}>
					<Link
						to='project-info'
						component={ReactLink}
						sx={{ color: 'inherited' }}
						underline='none'
					>
						<Typography variant='h5'>INFO</Typography>
					</Link>
				</CustomTopbarButton>
			</Stack>
		</AppBar>
	);
};

export default AuthInterface;
