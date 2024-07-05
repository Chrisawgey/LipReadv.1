import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Tennis from "./pages/Tennis/tennis.jsx";
import Soccer from "./pages/Soccer/Soccer.jsx";
import LipReading from "./pages/Lip-Reading/LipReading.jsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            { path: "/", element: <Homepage></Homepage> },
            { path: "/Lip-Reading", element: }
            { path: "/Soccer", element: <Cart></Cart> },
            { path: "/Tennis", element: <Game></Game> },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
