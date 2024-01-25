/* eslint-disable react/prop-types */
import {
    createContext,
    // useContext
} from 'react';

// import { isValidateRegister } from '../utils/authFunction';
// import { API_ROUTES } from '../utils/constants';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => (
    // const handleRegister = async (email, password, repeatedPassword) => {
    //     try {
    //         if (email === '' || password === '' || repeatedPassword === '') {
    //             throw Error('Wrong Credentials');
    //         }
    //         if (isValidateRegister(email, password, repeatedPassword)) {
    //             const { status, message } = await fetch(API_ROUTES.REGISTER, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     email,
    //                     password,
    //                 }),
    //             }).then((res) => res.json());

    //             if (status) {
    //                 setInfoColor('#32c809');
    //             } else {
    //                 setInfoColor('#d20404');
    //             }
    //             setInfoContent(message);
    //             setPassword('');
    //             setRepeatedPassword('');
    //             setTimeout(() => {
    //                 setInfoContent('');
    //             }, 5000);
    //         }
    //     } catch (err) {
    //         setInfoContent(err.message);
    //         setTimeout(() => {
    //             setInfoContent('');
    //         }, 5000);
    //     }
    // };

    <>
        <AuthContext.Provider
        // value={{ handleRegister }}
        >
            {children}
        </AuthContext.Provider>
    </>
);

export default AuthContext;

// export const useAuth = () => {
//     const auth = useContext(AuthContext);
// };
