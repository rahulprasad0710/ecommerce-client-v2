import { createBrowserRouter } from "react-router-dom";
import ADMIN_PERMISSSION from "../constant/AdminPermission";
import App from "../App";
import HomePage from "../pages/HomePage";

//Auth
import UserLogin from "../pages/auth/UserLogin";
import AdminLogin from "../pages/auth/AdminLogin";
import UserRegister from "../pages/auth/UserRegister";

import AdminProtectedRoute from "../components/auth/AdminProtectedRoute";

// Admin Pages
import AdminLayout from "../pages/admin/Layout.jsx";
import Dashboard from "../pages/admin/Dashboard";
import AddAdmin from "../pages/admin/AddAdmin";
import AdminList from "../pages/admin/AdminList";
import PageNotFound from "../pages/PageNotFound";

// Products
import ProductLayout from "../pages/product/Layout";
import ProductList from "../pages/product/ProductList";
import ProductAdd from "../pages/product/ProductAdd";

// Category
import CategoryLayout from "../pages/category/Layout";
import CategoryList from "../pages/category/CategoryList";
import AddCategory from "../pages/category/AddCategory";

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
                path: "/page-not-found",
                element: <PageNotFound />,
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
                        path: "dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "page-not-found",
                        element: <PageNotFound />,
                    },
                    {
                        path: "staff-list",
                        element: (
                            <AdminProtectedRoute
                                permissionRequired={
                                    ADMIN_PERMISSSION.ADMIN_VIEW
                                }>
                                <AdminList />
                            </AdminProtectedRoute>
                        ),
                    },
                    {
                        path: "add-staff",
                        element: (
                            <AdminProtectedRoute
                                permissionRequired={
                                    ADMIN_PERMISSSION.ADMIN_ADD
                                }>
                                <AddAdmin />
                            </AdminProtectedRoute>
                        ),
                    },
                    {
                        path: "products",
                        element: <ProductLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <AdminProtectedRoute
                                        permissionRequired={
                                            ADMIN_PERMISSSION.PRODUCT_VIEW
                                        }>
                                        <ProductList />
                                    </AdminProtectedRoute>
                                ),
                            },
                            {
                                path: "add",

                                element: (
                                    <AdminProtectedRoute
                                        permissionRequired={
                                            ADMIN_PERMISSSION.PRODUCT_CREATE
                                        }>
                                        <ProductAdd />
                                    </AdminProtectedRoute>
                                ),
                            },
                        ],
                    },
                    {
                        path: "categories",
                        element: <CategoryLayout />,
                        children: [
                            {
                                path: "add",
                                element: (
                                    <AdminProtectedRoute
                                        permissionRequired={
                                            ADMIN_PERMISSSION.CATEGORY_CREATE
                                        }>
                                        <AddCategory />
                                    </AdminProtectedRoute>
                                ),
                            },
                            {
                                path: "list",
                                element: (
                                    <AdminProtectedRoute
                                        permissionRequired={
                                            ADMIN_PERMISSSION.CATEGORY_VIEW
                                        }>
                                        <CategoryList />
                                    </AdminProtectedRoute>
                                ),
                            },
                        ],
                    },
                ],
            },
        ],
        errorElement: <PageNotFound />,
    },
]);

export default router;
