// // LoginContext.js
// import React, { createContext, useContext, useState } from "react";

// const LoginContext = createContext();

// export function useLogin() {
//     const context = useContext(LoginContext);
//     if (!context) {
//         throw new Error("useLogin must be used within a LoginProvider");
//     }
//     return context;
// }

// export function LoginProvider({ children }) {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const login = () => {
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//     };

//     return (
//         <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </LoginContext.Provider>
//     );
// }

// export default LoginContext;
