import Footer from './Comps/footer';
import Landing from './Comps/Landing';
import Showcase from './Comps/Showcase';
import Body from './Comps/body';
import BodyTwo from './Comps/lowerb';
import Landingtwo from './Comps/Landingtwo';
import { useRef } from 'react';

export default function Homepage() {
    const bodyRef = useRef(null);
    const landingTwoRef = useRef(null);
    const bodyTwoRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="homepage">
            <Landing
                scrollToSection={scrollToSection}
                bodyRef={bodyRef}
                landingTwoRef={landingTwoRef}
                bodyTwoRef={bodyTwoRef}
            />
            <div ref={bodyRef}>
                <Body></Body>
            </div>
            <div ref={landingTwoRef}>
                <Landingtwo></Landingtwo>
            </div>
            <div ref={bodyTwoRef}>
                <BodyTwo />
            </div>
            <Showcase></Showcase>
            <Footer />
        </div>
    );
}
