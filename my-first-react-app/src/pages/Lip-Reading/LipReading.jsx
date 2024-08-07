import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Homepage/Comps/lipread.css'; // Importing the custom CSS
import videoTennis from '../Homepage/Comps/comp-assets/output_videotennis.mp4';
import videoSoccer from '../Homepage/Comps/comp-assets/output_videosoccer.mp4';
import test from '../Homepage/Comps/comp-assets/3trained.mp4';
import newVideo from '../Homepage/Comps/comp-assets/bbaf2n.mp4'; // Importing the new video
import video1 from '../Homepage/Comps/comp-assets/bbaf3s.mp4'; // Importing additional videos
import video2 from '../Homepage/Comps/comp-assets/bbaf4p.mp4';
import video3 from '../Homepage/Comps/comp-assets/bbaf5a.mp4';
import video4 from '../Homepage/Comps/comp-assets/bbal6n.mp4';
import logo from '../Homepage/Comps/comp-assets/iraplogo.png';
import lipReadingImage from '../Homepage/Comps/comp-assets/ai.jpeg'; // Importing the image
import gifImage from '../Homepage/Comps/comp-assets/soocer_gif.gif'; // Importing the GIF
import newGifImage from '../Homepage/Comps/comp-assets/animation.gif'; // Importing the new GIF
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal'; // Import the VideoModal component

export default function LipReading() {
    const [selectedVideo, setSelectedVideo] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    const handleVideoChange = (videoValue) => {
        setSelectedVideo(videoValue);

        let text;
        switch (videoValue) {
            case newVideo:
                text = 'Output: Bin Blue At F 2 Now';
                break;
            case video1:
                text = 'Output: Bin Blue Af 3 Soon';
                break;
            case video2:
                text = 'Output: Bin Blue F 4 Please';
                break;
            case video3:
                text = 'Output: Bin Blue At F 5 Again';
                break;
            case video4:
                text = 'Output: Bin Blue Al 6 Now';
                break;
            default:
                text = '';
        }
        setDisplayText(text);
        setIsModalOpen(false); // Close the modal after selecting a video
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="lip-reading">
            <nav className="nav-bar">
                <div id="logo">
                    <Link to="/">
                        <img src={logo} alt="IRAP Logo" />
                    </Link>
                </div>
            </nav>
            <div className="landing">
                <section className="carousel-section">
                    <div className="carousel-container">
                        {/* Video Carousel */}
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            useKeyboardArrows
                            autoPlay
                        >
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
                        </Carousel>
                    </div>
                    <div className="carousel-text">
                        <h2>Unveiling the Power of AI: A Video Showcase</h2>
                        <p>
                            Immerse yourself in a curated selection of videos highlighting the brilliance of artificial intelligence. From in-depth analyses of soccer and tennis to groundbreaking AI projects, witness how machine learning is revolutionizing the world. Enjoy an insightful journey into the future of technology!
                        </p>
                    </div>
                </section>
            </div>

            {/* About Lip Reading Section */}
            <section className="about-lip-reading">
                <div className="text-content">
                    <h2>A.I & ML: How it will impact the next years to come.</h2>
                    <p>
                        AI and ML are revolutionizing industries by boosting efficiency and personalization. They enhance healthcare, education, finance, and sports performance. They also improve tools for the deaf and blind. While promising improved quality of life and cost savings, addressing ethical concerns and data privacy is crucial.
                    </p>
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
                    <p>
                        One highlight showcases a snippet from a soccer AI project, demonstrating the use of YOLO v8, TensorFlow, and other advanced technologies. These tools are utilized to accurately gather game statistics and employ sophisticated clustering techniques to differentiate between team jerseys.
                    </p>
                </div>
            </section>

            {/* Dropdown Video Section */}
            <section className="dropdown-video-section">
                <div className="header-container">
                    <h1>The Lip Reader</h1>
                </div>
                <div className="dropdown-container">
                    <button onClick={openModal}>Select Video</button>
                </div>
                <div className="video-player-container">
                    <div className="video-player">
                        {selectedVideo && (
                            <video controls key={selectedVideo}>
                                <source src={selectedVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                    {selectedVideo && (
                        <div className="gif-and-text">
                            <img src={newGifImage} alt="GIF" />
                            <p>{displayText}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* How Does It Work Section */}
            <section className="how-does-it-work">
                <div className="how-does-it-work-container">
                    <h2>How does it work?</h2>
                </div>
            </section>

            {isModalOpen && <VideoModal handleVideoChange={handleVideoChange} closeModal={closeModal} />}
        </div>
    );
}
