import React from "react";
import shop from "./images/cookieshop.jpeg";
import "./App.css";

function App() {
  return (
    <body>
      <h1 class="header">Cookies & Beyond</h1>
      <h4 class="header">Where cookies maniacs gether</h4>
      <img class="image" src={shop} alt="Cookie Shop"></img>
    </body>
  );
}

export default App;
