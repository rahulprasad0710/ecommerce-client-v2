import { createBrowserRouter } from "react-router-dom";

//
import App from "../App";
import HomePage from "../pages/HomePage";

//Auth
import UserLogin from "../pages/auth/UserLogin";
import AdminLogin from "../pages/auth/AdminLogin";
import UserRegister from "../pages/auth/UserRegister";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/auth/login",
                element: <UserLogin />,
            },
            {
                path: "/auth/signup",
                element: <UserRegister />,
            },
            {
                path: "/auth/admin-login",
                element: <AdminLogin />,
            },
        ],
    },
]);

export default router;
