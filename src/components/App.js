import React, { useState } from 'react';

function MyButton() {
  // Declare a new state variable, "showText", and set it to false
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {/* When the button is clicked, call the "setShowText" function to update the "showText" state variable */}
      <button id="click" onClick={() => setShowText(!showText)}>
        Click Me
      </button>
      {/* Use the "showText" state variable to conditionally render the paragraph tag */}
      {showText && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
}

export default MyButton;
