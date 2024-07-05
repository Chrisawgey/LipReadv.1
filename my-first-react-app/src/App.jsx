// App.jsx
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

function App() {
    // will use outlet to handle routes
    return (
        <div className="app">
            <Homepage></Homepage>
        </div>
    );
}

export default App;
