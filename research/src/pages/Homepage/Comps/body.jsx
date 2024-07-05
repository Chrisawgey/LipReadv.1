import { useNavigate } from 'react-router-dom';
import animationGif from "./comp-assets/animation.gif"; // Importing the GIF from the correct path

export default function Body() {
    const navigate = useNavigate();

    const centerTextStyle = {
        fontFamily: "Archivo, sans-serif", // Archivo font
        textAlign: "center", // Center align text horizontally
        color: "#111f68", // Dark blue text color
        backgroundColor: "#FFFFFF", // White background color
        padding: "20px", // Padding around the content
    };

    const imageBoxStyle = {
        width: "80%", // Adjust the width of the image box
        maxWidth: "900px", // Maximum width of the image box for larger screens
        margin: "auto", // Center align the image box horizontally
        marginTop: "20px", // Optional: Adjust top margin for spacing
    };

    const gridContainerStyle = {
        display: "flex", // Use flexbox for a row layout
        justifyContent: "center", // Center align items horizontally
        marginTop: "25px", // Optional: Adjust top margin for spacing
        flexWrap: "wrap", // Enable wrapping to handle multiple rows
    };

    const squareStyle = {
        width: "200px", // Adjust width of each rectangle
        height: "150px", // Adjust height of each rectangle
        backgroundColor: "#FFFFFF", // White background color
        border: "1px solid #CCCCCC", // Grey border with 1px thickness
        borderRadius: "10px", // Border radius of 10 pixels
        display: "flex", // Use flexbox for centering text and circle
        justifyContent: "center", // Center align items horizontally
        alignItems: "center", // Center align items vertically
        position: "relative", // Position relative for absolute positioning of circle
        margin: "10px", // Margin between rectangles
        transition: "transform 0.2s ease-in-out", // Smooth transition for scale effect
        overflow: "hidden", // Hide overflow to prevent scaling issues
    };

    const circleStyle = {
        width: "40px", // Diameter of the circle
        height: "40px",
        backgroundColor: "#e1ff25", // Green background color
        borderRadius: "50%", // Make it a circle
        position: "absolute", // Position absolute for placement inside rectangle
        top: "10px", // Adjust top position for circle
        left: "10px", // Adjust left position for circle
        display: "flex", // Use flexbox for centering text inside circle
        justifyContent: "center", // Center align items horizontally
        alignItems: "center", // Center align items vertically
        color: "#000000", // Black text color
        fontSize: "16px", // Font size of text inside circle
        transition: "transform 0.2s ease-in-out", // Smooth transition for scale effect
    };

    const textInsideRectangleStyle = {
        fontSize: "18px", // Set font size for text inside rectangles
        textAlign: "center", // Center align text inside rectangles
        marginTop: "20px", // Adjust top margin for proper positioning
    };

    const buttonStyle = {
        display: "inline-block",
        backgroundColor: "#111f68", // Dark blue background color
        color: "#FFFFFF", // White text color
        padding: "15px 80px", // Padding inside the button
        marginTop: "40px", // Top margin for spacing
        borderRadius: "50px", // Border radius
        border: "none", // No border
        cursor: "pointer", // Pointer cursor on hover
        transition: "background-color 0.3s", // Smooth transition for background color
    };

    const handleButtonHover = (event) => {
        event.target.style.backgroundColor = "#0000ff";
    };

    const handleButtonHoverOut = (event) => {
        event.target.style.backgroundColor = "#1E3A8A"; // Dark blue background color on hover out
    };

    const handleButtonClick = () => {
        navigate('/Lip-Reading');
    };

    return (
        <div style={centerTextStyle}>
            <h1>Check out how it works!</h1>
            <p>Dive deep into the future of AI.</p>

            {/* Image box */}
            <div style={imageBoxStyle}>
                <img
                    src={animationGif}
                    alt="Animation showing how it works"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />
            </div>

            {/* Grid container for rectangles */}
            <div style={gridContainerStyle}>
                {/* Rectangle 1 */}
                <div
                    style={squareStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <div style={circleStyle}>1</div>
                    <div style={textInsideRectangleStyle}>
                        Real world problems.
                    </div>
                </div>

                {/* Rectangle 2 */}
                <div
                    style={squareStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <div style={circleStyle}>2</div>
                    <div style={textInsideRectangleStyle}>
                        Self trained models.
                    </div>
                </div>

                {/* Rectangle 3 */}
                <div
                    style={squareStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <div style={circleStyle}>3</div>
                    <div style={textInsideRectangleStyle}>Deep Learning</div>
                </div>

                {/* Rectangle 4 */}
                <div
                    style={squareStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <div style={circleStyle}>4</div>
                    <div style={textInsideRectangleStyle}>
                        Explainable AI (XAI).
                    </div>
                </div>

                {/* Add more rectangles as needed */}
            </div>

            {/* Read more button */}
            <button
                style={buttonStyle}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                onClick={handleButtonClick}
            >
                Read More
            </button>
        </div>
    );
}
