import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Tennis from "./pages/Tennis/tennis.jsx";
import Soccer from "./pages/Soccer/Soccer.jsx";
//import LipReading from "./pages/Lip-Reading/LipReading.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "/Lip-Reading", element: <LipReading /> },
            { path: "/Soccer", element: <Soccer /> },
            { path: "/Tennis", element: <Tennis /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
