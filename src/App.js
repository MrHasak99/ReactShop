import shop from "./images/cookieshop.jpeg";
import "./App.css";
import { product } from "./products";
import ProductItem from "./components/ProductItem";
function App() {
  const productList = product.map(function (product) {
    return (
      <div>
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
        ></img>
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
      </div>
    );
  });
  return (
    <body>
      <div className="header">
        <h1>Cookies & Beyond</h1>
        <h4>Where cookies maniacs gether</h4>
      </div>
      <img className="image" src={shop} alt="Cookie Shop"></img>
      <div className="product-list">
        {/* {productList} */}
        <ProductItem />
      </div>
    </body>
  );
}

export default App;
