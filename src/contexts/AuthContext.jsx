import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<>
			<AuthContext.Provider>{children}</AuthContext.Provider>
		</>
	);
};