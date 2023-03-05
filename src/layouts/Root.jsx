import { Outlet } from 'react-router-dom';
import UserInterface from '../components/UserInterface/UserInterface';
import Container from '@mui/material/Container';

const Root = () => {
	return (
		<>
			<UserInterface />
			<Container
				maxWidth={false}
				sx={{
					// border: '1px solid white',
					backgroundColor: '',
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

export default Root;
