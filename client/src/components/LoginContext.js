
import React, { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();

export function useLogin() {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLogin must be used within a LoginProvider");
    }
    return context;
}

export function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    // Use useEffect to save the login status to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

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

export default LoginContext;
