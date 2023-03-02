import { Outlet } from 'react-router-dom';
import AuthInterface from '../components/AuthInterface/AuthInterface';

const AuthRoot = () => {
	return (
		<>
			<AuthInterface />
			<Outlet />
		</>
	);
};

export default AuthRoot;
