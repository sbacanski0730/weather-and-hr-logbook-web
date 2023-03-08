import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AuthInterface from '../components/AuthInterface/AuthInterface';

const AuthRoot = () => {
	return (
		<>
			<AuthInterface />
			<Container
				maxWidth={false}
				sx={{
					backgroundColor: 'secondary.light',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Outlet />
			</Container>
		</>
	);
};

export default AuthRoot;
