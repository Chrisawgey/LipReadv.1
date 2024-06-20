import { useState, useEffect } from "react";
import img from "../assets/image.png";
import img2 from "../assets/image2.png";
import "./Landing.css";
import logo1 from "./logos/css.svg";
import logo2 from "./logos/html.svg";
import logo3 from "./logos/opencv.svg";
import logo4 from "./logos/react.svg";
import logo5 from "./logos/vite.svg";
import logo6 from "./logos/git.svg";

const images = [{ src: img }, { src: img2 }];
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
                    <div id="logo">Logo</div>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3 </li>
                    </ul>
                </div>
                <div>Hamburger</div>
            </nav>
            <section>
                <div className="left-main-right">
                    <h2>
                        Turn images into AI to get useful insights with no code
                    </h2>
                    <p>
                        Drag-and-drop your data, do some tweaks — and voilà, a
                        new powerful AI tool is born
                    </p>
                    <div className="button-container">
                        <button>Start for free</button>
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
