import { useState, useEffect } from "react";
import img from "./comp-assets/playercut.jpg";
import img2 from "./comp-assets/lipss.png";
import img3 from "./comp-assets/playeruncut.png";
import "./Landing.css";
import logo1 from "./logos/css.svg";
import logo2 from "./logos/html.svg";
import logo3 from "./logos/opencv.svg";
import logo4 from "./logos/react.svg";
import logo5 from "./logos/vite.svg";
import logo6 from "./logos/git.svg";
import iraplogo from "./comp-assets/iraplogo.png";

const images = [{ src: img }, { src: img2 }, { src: img3 }];
export default function Landing() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length,
            );
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="landing">
            <nav className="nav-bar">
                <div className="left">
                    <div id="logo">
                        <img src={iraplogo} alt="IRAP Logo" />
                    </div>
                </div>
                <div>Hamburger</div>
            </nav>
            <section>
                <div className="left-main-right">
                    <h2>
                        Explore the Future of AI/ML: Unlocking Limitless
                        Technological Possibilities
                    </h2>
                    <p>
                        Discover how advanced AI/ML techniques are transforming
                        technology and reshaping our world.
                    </p>
                    <div className="button-container">
                        <button>Start Here</button>
                        <button>GitHub</button>
                    </div>
                </div>
                {/* Right here make the transition were the image slowly disapears and the new image reappears */}
                <div className="right-main-right">
                    <div className="image-container">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                className={
                                    index === currentImageIndex
                                        ? "fade-in"
                                        : "fade-out"
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className="logos">
                <p>TRUSTED BY THE WORLD'S LEADING ORGANIZATIONS</p>
                <div className="logos-slide">
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    <img src={logo5} />
                    <img src={logo6} />
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    <img src={logo5} />
                    <img src={logo6} />
                </div>
            </div>
        </div>
    );
}
