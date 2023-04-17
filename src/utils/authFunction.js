import { API_ROUTES } from './constants';

export function storeTokenInLocalStorage(token) {
	localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
	return localStorage.getItem('token');
}

export async function authenticateUserToken() {
	let defaultReturnObject = { verify: false, user: null };

	const token = getTokenFromLocalStorage();

	if (!token) {
		return defaultReturnObject;
	}

	const { content } = await fetch(API_ROUTES.GET_USER, {
		method: 'GET',
		headers: {
			token: getTokenFromLocalStorage(),
		},
	}).then(res => res.json());

	return { verify: true, user: content.email };
}

export function isValidateLogin(email, password) {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!email || !email.toLowerCase().match(emailRegex)) {
		throw 'Valid email required!';
	}

	if (!password) {
		throw 'Password required!';
	}

	return true;
}

export function isValidateRegister(email, password, repeatedPassword) {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!email || !email.toLowerCase().match(emailRegex)) {
		throw 'Valid email required!';
	}

	if (email.length > 128) {
		throw 'Email too long!';
	}

	if (!password) {
		throw 'Password required!';
	}

	if (password.length < 5) {
		throw 'Password must be at least 5 characters long!';
	}

	if (password.length > 128) {
		throw 'Password too long!';
	}

	if (!(password === repeatedPassword)) {
		throw 'Passwords should be the same!';
	}

	return true;
}
