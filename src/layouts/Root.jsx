import { Outlet } from 'react-router-dom';
import UserInterface from '../components/UserInterface/UserInterface';

const Root = () => {
	return (
		<>
			<UserInterface />
			<Outlet />
		</>
	);
};

export default Root;
