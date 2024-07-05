import "./footer.css"; // Import the CSS file
import gitlogo from "./comp-assets/githublogo.png";
import iraplogo from "./comp-assets/iraplogo.png";
import logo1 from "./logos/css.svg";
import logo2 from "./logos/html.svg";
import logo3 from "./logos/opencv.svg";
import logo4 from "./logos/react.svg";
import logo5 from "./logos/vite.svg";
import logo6 from "./logos/git.svg";
import "./footer.css"; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div classame="top-line"></div>
            <div className="container">
                <div className="tech-used">
                    <h3>TECH USED</h3>
                    <img src={logo1} className="tech-logo" alt="CSS Logo" />
                    <img src={logo2} className="tech-logo" alt="HTML Logo" />
                    <img src={logo3} className="tech-logo" alt="OpenCV Logo" />
                    <img src={logo4} className="tech-logo" alt="React Logo" />
                    <img src={logo5} className="tech-logo" alt="Vite Logo" />
                    <img src={logo6} className="tech-logo" alt="Git Logo" />
                </div>
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Email: example@example.com</p>
                    <img src={gitlogo} alt="github logo" className="git" />
                    <img src={iraplogo} alt="irap logo" className="irap" />
                </div>
                <div className="address-info">
                    <h3>Address</h3>
                    <p>1234 Example St, City, Country</p>
                </div>
            </div>
        </footer>
    );
}
