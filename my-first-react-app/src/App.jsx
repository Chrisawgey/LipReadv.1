// App.jsx
import "./App.css";
import Landing from "./Components/Landing";
import Body from "./Components/body";
import BodyTwo from "./Components/lowerb";
import Landingtwo from "./Components/Landingtwo";
import Footer from "./Components/footer";
import Showcase from "./Components/Showcase";
import ImplementSection from "./Components/ImplementSection"

function App() {
    return (
        <div className="app">
            <Landing />
            <Body />
            <Landingtwo></Landingtwo>
            <Showcase></Showcase>
            <ImplementSection></ImplementSection>
            <BodyTwo />
            <Footer />
        </div>
    );
}

export default App;
