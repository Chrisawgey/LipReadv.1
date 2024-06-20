import React from "react";
import animationGif from "../assets/animation.gif"; // Importing the GIF from the correct path

export default function Body() {
    const centerTextStyle = {
<<<<<<< HEAD
        fontFamily: "Archivo, sans-serif",
        textAlign: "center",
        color: "#1E3A8A",
        backgroundColor: "#FFFFFF",
        padding: "30px", // Padding around the content
    };

    const imageBoxStyle = {
        maxWidth: "70%", // Adjust the maximum width of the image box
        margin: "auto", // Center align the image box horizontally
        marginTop: "50px", // Adjust top margin for spacing
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
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    );
}
=======
      fontFamily: 'Archivo, sans-serif',  // Archivo font
      textAlign: 'center',               // Center align text horizontally
      color: '#1E3A8A',                  // Dark blue text color
      backgroundColor: '#FFFFFF',        // White background color
      padding: '30px',                   // Padding around the content
    };
  
    const imageBoxStyle = {
      maxWidth: '80%',                    // Adjust the maximum width of the image box
      margin: 'auto',                     // Center align the image box horizontally
      marginTop: '20px',                 
    };
  
    const imageStyle = {
      width: '100%',                      // Ensure the image spans the full width of its container
      height: 'auto',                     
      borderRadius: '10px',               // Border radius of 10 pixels
    };
  
    return (
      <div style={centerTextStyle}>
        <h1>Check out how it works!</h1>
        <p>Dive deep into the future of AI.</p>
  
        {/* Image box */}
        <div style={imageBoxStyle}>
          <img src={animationGif} alt="Animation showing how it works" style={imageStyle} />
        </div>
      </div>
    );
  }
>>>>>>> fe964b2103759d03f2128b8de9866c79391d3e77
