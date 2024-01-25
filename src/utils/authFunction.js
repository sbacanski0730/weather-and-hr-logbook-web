import { API_ROUTES } from './constants';

export function storeTokenInLocalStorage(token) {
    localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
    return localStorage.getItem('token');
}

export async function authenticateUserToken() {
    const defaultReturnObject = { verify: false, user: null };

    const token = localStorage.getItem('token');

    if (!token) {
        return defaultReturnObject;
    }

    const response = await fetch(API_ROUTES.GET_USER, {
        method: 'GET',
        headers: {
            token: localStorage.getItem('token'),
        },
    }).then((res) => res.json());

    if (!response.status) {
        localStorage.removeItem('token');
        return { verify: false };
    }

    return { verify: true };
}

export function isValidateLogin(email, password) {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !email.toLowerCase().match(emailRegex)) {
        throw new Error('Valid email required!');
    }

    if (!password) {
        throw new Error('Password required!');
    }

    return true;
}

export function isValidateRegister(email, password, repeatedPassword) {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !email.toLowerCase().match(emailRegex)) {
        throw new Error('Valid email required');
    }

    if (email.length > 128) {
        throw new Error('Email too long');
    }

    if (!password) {
        throw new Error('Password required');
    }

    if (password.length < 5) {
        throw new Error('Password must be at least 5 characters long');
    }

    if (password.length > 128) {
        throw new Error('Password too long');
    }

    if (!(password === repeatedPassword)) {
        throw new Error('Passwords should be the same');
    }

    return true;
}
