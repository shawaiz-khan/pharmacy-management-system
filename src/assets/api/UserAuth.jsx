/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// UserAuth.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the auth context
export function useAuth() {
    return useContext(AuthContext);
}
