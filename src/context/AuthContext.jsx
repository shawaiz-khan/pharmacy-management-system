/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth/status', {
                    method: 'GET',
                    credentials: 'include', // Important for session cookies
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(data.isLoggedIn);
                }
            } catch (error) {
                console.error('Error fetching login status:', error);
            }
        };

        fetchLoginStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
