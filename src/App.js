import shop from "./images/cookieshop.jpeg";
import "./App.css";

function App() {
  return (
    <body>
      <h1 className="header">Cookies & Beyond</h1>
      <h4 className="header">Where cookies maniacs gether</h4>
      <img className="image" src={shop} alt="Cookie Shop"></img>
    </body>
  );
}

export default App;
