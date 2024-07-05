import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Homepage/Comps/lipread.css"; // Importing the custom CSS
import videoTennis from '../Homepage/Comps/comp-assets/output_videotennis.mp4';
import videoSoccer from '../Homepage/Comps/comp-assets/output_videosoccer.mp4';
import logo from '../Homepage/Comps/comp-assets/iraplogo.png'; // Importing the logo

export default function LipReading() {


    return (
        <div className="lip-reading">
            <nav className="nav-bar">
                <div id="logo">
                    <img src={logo} alt="IRAP Logo" />
                </div>
                <div className="left">
                    <ul>
                        
                            
                    </ul>
                </div>
            </nav>

            <div className="landing">
                <section>
                    {/* Video Carousel */}
                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <video controls>
                                <source src={videoTennis} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div>
                            <video controls>
                                <source src={videoSoccer} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* You can add more video slides here */}
                    </Carousel>
                </section>
            </div>

            <h1>Lip Reading</h1>
            <p>Content about lip reading will go here.</p>
        </div>
    );
}
