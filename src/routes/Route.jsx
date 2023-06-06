import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";

//Auth
import UserLogin from "../pages/auth/UserLogin";
import AdminLogin from "../pages/auth/AdminLogin";
import UserRegister from "../pages/auth/UserRegister";

// Admin Pages
import AdminLayout from "../pages/admin/Layout.jsx";
import Dashboard from "../pages/admin/Dashboard";
import AddAdmin from "../pages/admin/AddAdmin";

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
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "",
                        element: <Dashboard />,
                    },
                    {
                        path: "add-admin",
                        element: <AddAdmin />,
                    },
                ],
            },
        ],
    },
]);

export default router;
