import './footer.css'; // Import the CSS file
import gitlogo from './comp-assets/githublogo.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="contributors">
                    <h3>Contributors</h3>
                    <p>John Doe</p>
                    <p>Jane Smith</p>
                    <p>Mike Johnson</p>
                </div>
                <div className="github">
                    <h3>Our GitHub</h3>
                    <a
                        href="https://github.com/dummy-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={gitlogo} alt="GitHub Logo" className="git" />
                    </a>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>
                        We are a team of developers passionate about creating
                        awesome projects. Follow us on GitHub to stay updated
                        with our work.
                    </p>
                </div>
            </div>
        </footer>
    );
}
