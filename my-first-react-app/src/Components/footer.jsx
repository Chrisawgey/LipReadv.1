import "./footer.css"; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo-container"></div>
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
