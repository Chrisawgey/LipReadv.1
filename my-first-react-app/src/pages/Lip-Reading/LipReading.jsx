import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Homepage/Comps/lipread.css"; // Importing the custom CSS
import videoTennis from '../Homepage/Comps/comp-assets/output_videotennis.mp4';
import videoSoccer from '../Homepage/Comps/comp-assets/output_videosoccer.mp4';
import test from '../Homepage/Comps/comp-assets/3trained.mp4';
import logo from '../Homepage/Comps/comp-assets/iraplogo.png';
import lipReadingImage from '../Homepage/Comps/comp-assets/ai.jpeg'; // Importing the image
import gifImage from '../Homepage/Comps/comp-assets/soocer_gif.gif'; // Importing the GIF
import Showcase from "../Homepage/Comps/Showcase"

export default function LipReading() {
    const [selectedVideo, setSelectedVideo] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    const handleVideoChange = (event) => {
        setSelectedVideo(event.target.value);
    };

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
                <section className="carousel-section">
                    <div className="carousel-container">
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
                    </div>
                    <div className="carousel-text">
                        <h2>Unveiling the Power of AI: A Video Showcase</h2>
                        <p>Immerse yourself in a curated selection of videos highlighting the brilliance of artificial intelligence. From in-depth analyses of soccer and tennis to groundbreaking AI projects, witness how machine learning is revolutionizing the world. Enjoy an insightful journey into the future of technology!</p>
                    </div>
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

            {/* GIF Section */}
            <section className="gif-section">
                <div className="gif-content">
                    <img src={gifImage} alt="Animated GIF" />
                </div>
                <div className="text-side">
                    <p>One highlight showcases a snippet from a soccer AI project, demonstrating the use of YOLO v8, TensorFlow, and other advanced technologies. These tools are utilized to accurately gather game statistics and employ sophisticated clustering techniques to differentiate between team jerseys.</p>
                </div>
            </section>

            {/* Dropdown Video Section */}
            <section className="dropdown-video-section">
                <div className="dropdown-container">
                    <label htmlFor="video-select">Choose a video:</label>
                    <select id="video-select" onChange={handleVideoChange}>
                        <option value="">Select a video</option>
                        <option value={videoTennis}>Tennis Analysis</option>
                        <option value={videoSoccer}>Soccer Analysis</option>
                        <option value={test}>Test Video</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="video-player">
                    {selectedVideo && (
                        <video controls>
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </section>
        </div>
    );
}
