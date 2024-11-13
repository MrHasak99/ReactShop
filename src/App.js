import shop from "./cookieshop.jpeg";
import "./App.css";
import ProductList from "./components/ProductList";
function App() {
  return (
    <body>
      <div className="header">
        <h1>Cookies & Beyond</h1>
        <h4>Where cookies maniacs gether</h4>
      </div>
      <img className="image" src={shop} alt="Cookie Shop"></img>
      <div className="product-list">
        <ProductList />
      </div>
    </body>
  );
}

export default App;
