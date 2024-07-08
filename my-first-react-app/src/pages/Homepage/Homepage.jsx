import Footer from "./Comps/footer";
import Landing from "./Comps/Landing";
import Showcase from "./Comps/Showcase";
import Body from "./Comps/body";
import BodyTwo from "./Comps/lowerb";
import Landingtwo from "./Comps/Landingtwo";


export default function Homepage() {
    return (
        <div className="homepage">
            <Landing />
            <Body />
            <Landingtwo></Landingtwo>
            
            
            <BodyTwo />
            <Showcase></Showcase>
            <Footer />
        </div>
    );
}
