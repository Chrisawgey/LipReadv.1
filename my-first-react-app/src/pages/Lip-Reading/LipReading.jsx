import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Homepage/Comps/lipread.css"; // Importing the custom CSS
import videoTennis from '../Homepage/Comps/comp-assets/output_videotennis.mp4';
import videoSoccer from '../Homepage/Comps/comp-assets/output_videosoccer.mp4';
import test from '../Homepage/Comps/comp-assets/3trained.mp4';
import logo from '../Homepage/Comps/comp-assets/iraplogo.png';
import lipReadingImage from '../Homepage/Comps/comp-assets/ai.jpeg'; // Importing the image

export default function LipReading() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    return (
        <div className="lip-reading">
            <nav className="nav-bar">
                <div id="logo">
                    <img src={logo} alt="IRAP Logo" />
                </div>
                <div className="left">
                    <ul>
                        {/* Add any menu items here */}
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
                        <div>
                            <video controls>
                                <source src={test} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* You can add more video slides here */}
                    </Carousel>
                </section>
            </div>

            {/* About Lip Reading Section */}
            <section className="about-lip-reading">
                <div className="text-content">
                    <h2>A.I & ML: How it will impact the next years to come.</h2>
                    <p>AI and ML are revolutionizing industries by boosting efficiency and personalization. They enhance healthcare, education, finance, and sports performance. They also improve tools for the deaf and blind. While promising improved quality of life and cost savings, addressing ethical concerns and data privacy is crucial.</p>
                </div>
                <div className="image-content">
                    <img src={lipReadingImage} alt="Lip Reading" />
                </div>
            </section>

        </div>
    );
}
