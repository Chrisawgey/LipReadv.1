// App.jsx
import "./App.css";
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
