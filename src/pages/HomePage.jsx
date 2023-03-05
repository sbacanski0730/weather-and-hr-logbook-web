import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../utils/constants';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('token')) navigate(APP_ROUTES.LOGIN);
	}, []);

	return <div>Home</div>;
};

export default Home;
