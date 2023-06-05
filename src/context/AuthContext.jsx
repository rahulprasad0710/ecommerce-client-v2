import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const userIntialState = {
        name: "",
        isAdmin: false,
        Permissions: [],
        token: null,
    };

    const [userInfo, setuserInfo] = useState(
        JSON.parse(localStorage.getItem("user")) ||
            JSON.parse(sessionStorage.getItem("user")) ||
            userIntialState
    );

    const loginFn = (userDataFromLogin, rememberMe) => {
        setuserInfo(userDataFromLogin);
        localStorage.setItem("rememberMe", rememberMe);
        if (rememberMe) {
            localStorage.setItem("user", JSON.stringify(userDataFromLogin));
        } else {
            sessionStorage.setItem("user", JSON.stringify(userDataFromLogin));
        }
        return true;
    };

    const logoutFn = () => {
        const rememberMeFromLocal = localStorage.getItem("rememberMe");
        if (rememberMeFromLocal) {
            localStorage.removeItem("user");
        } else {
            sessionStorage.removeItem("user");
        }
        setuserInfo(userIntialState);
        localStorage.removeItem("rememberMe");
        return true;
    };

    const authContextValue = {
        userInfo,
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
