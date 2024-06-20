import React from 'react';
import animationGif from '../assets/animation.gif'; // Importing the GIF from the correct path

export default function Body() {
  const centerTextStyle = {
    fontFamily: 'Archivo, sans-serif',  
    textAlign: 'center',               
    color: '#1E3A8A',                  
    backgroundColor: '#FFFFFF',        
    padding: '30px',                   // Padding around the content
  };

  const imageBoxStyle = {
    maxWidth: '70%',                    // Adjust the maximum width of the image box
    margin: 'auto',                     // Center align the image box horizontally
    marginTop: '50px',                  // Adjust top margin for spacing
  };

  return (
    <div style={centerTextStyle}>
      <h1>Check out how it works!</h1>
      <p>Dive deep into the future of AI.</p>

      {/* Image box */}
      <div style={imageBoxStyle}>
        <img src={animationGif} alt="Animation showing how it works" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}
