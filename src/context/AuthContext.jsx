import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = {
        name: "",
        isAdmin: false,
        Permissions: [],
        token: null,
    };

    const [userInfo, setuserInfo] = useState(user);

    const [darkMode, setDarkMode] = useState(false);

    const loginFn = (data, rememberMe) => {
        console.log("from Context", data, rememberMe);
        const user = {
            name: data.rest.name,
            isAdmin: false,
            Permissions: [],
            token: data.accessToken,
        };
        setuserInfo(user);

        localStorage.setItem("rememberMe", rememberMe);

        if (rememberMe) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            sessionStorage.setItem("user", JSON.stringify(user));
        }
    };

    const logoutFn = () => {
        const rememberMeFromLocal = localStorage.getItem("rememberMe");
        if (rememberMeFromLocal) {
            localStorage.removeItem("user");
        } else {
            sessionStorage.removeItem("user");
        }
        setuserInfo({
            name: "",
            isAdmin: false,
            Permissions: [],
            token: null,
        });
        localStorage.removeItem("rememberMe");
    };

    const authContextValue = {
        userInfo,
        darkMode,
        setDarkMode,
        loginFn,
        logoutFn,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
