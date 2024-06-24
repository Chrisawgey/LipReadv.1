
import gitlogo from '../assets/githublogo.png'; 
import iraplogo from '../assets/iraplogo.png'; 
import '..Components/'; // Import the CSS file

export default function Footer() {

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo-container">
                    <img src={gitlogo} alt="GitHub Logo" className="logo" />
                    <img src={iraplogo} alt="IRAP Logo" className="logo" />
                </div>
                <div className="contact-info">
                    <h3>Get in Touch</h3>
                    <p>Email: example@example.com</p>
                </div>
                <div className="address-info">
                    <h3>Address</h3>
                    <p>1234 Example St, City, Country</p>
                </div>
            </div>
        </footer>
    );
}

}
