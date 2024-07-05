// App.jsx
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Outlet } from "react-router-dom";

function App() {
    // will use outlet to handle routes
    return (
        <div className="app">
            <Outlet></Outlet>
        </div>
    );
}

export default App;
