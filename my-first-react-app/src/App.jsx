// App.jsx
import "./App.css";
import Landing from "./Components/Landing";
import Body from "./Components/body";
import BodyTwo from "./Components/lowerb";
import Landingtwo from "./Components/Landingtwo";
import Footer from "./Components/footer";

function App() {
    return (
        <div className="app">
            <Landing />
            <Body />
            <Landingtwo></Landingtwo>
            <BodyTwo />
            <Footer />
        </div>
    );
}

export default App;
