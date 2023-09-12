// LoginContext.js
import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function useLogin() {
    return useContext(LoginContext);
}

export function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
}
export default LoginContext