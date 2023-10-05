import { createContext } from 'react';
import propTypes from 'prop-types';
import { API_ROUTES } from '../utils/constants';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const passwordReset = async (body) => {
        const response = await fetch(API_ROUTES.PASSWORD_RESET, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((res) => res.json());
        return response;
    };

    const setNewPassword = async (userId, token, newPassword) => {
        const response = await fetch(API_ROUTES.NEW_PASSWORD, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ userId, token, newPassword }),
        }).then((res) => res.json());

        return response;
    };

    return (
        <>
            <AuthContext.Provider value={{ passwordReset, setNewPassword }}>{children}</AuthContext.Provider>
        </>
    );
};

AuthContextProvider.propTypes = {
    children: propTypes.node,
};
