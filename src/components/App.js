import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() 
{
  const [displayMessage, setDisplayMessage] = useState(false);

  return (
	<div id="main">
		{
    		(displayMessage === false)?(null):(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
    	}
		<button id="click" onClick={()=>setDisplayMessage(true)}>Click me</button>
    </div>
  );
}


export default App;
