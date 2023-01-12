import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[paragraph,setPara]=useState(false);
  const Btn = () =>{
    setPara(!paragraph)
  };
  return (
    <div id="main">
      {paragraph ?  "":<p className="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button className="click" onClick={Btn}>Paragraph</button>
    </div>
  );
}


export default App;
