import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/bootstrap.css";
import "./index.css";
import router from "./routes/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
