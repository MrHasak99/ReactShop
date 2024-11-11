import shop from "./images/cookieshop.jpeg";
import "./App.css";
import { products } from "./products";
function App() {
  const product = [
    {
      name: "Chocolate Chip Cookies",
      image:
        "https://yogaofcooking.co/wp-content/uploads/2020/10/old-fashioned-chocolate-chip-cookies-2.jpg",
      price: "5 KD",
    },
    {
      name: "Cute Cookies",
      image:
        "https://img-global.cpcdn.com/recipes/4859182992850944/1360x964cq70/teddy-bear-cookies-recipe-main-photo.webp",
      price: "10 KD",
    },
  ];
  const productsList = product.map(function (product) {
    return (
      <div className="product">
        <img
          className="product-image"
          src={product.image}
          alt="Chocolate Chip Cookies"
        ></img>
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
      </div>
    );
  });
  return (
    <body>
      <h1 className="header">Cookies & Beyond</h1>
      <h4 className="header">Where cookies maniacs gether</h4>
      <img className="image" src={shop} alt="Cookie Shop"></img>
      <div className="product-list">
        {productsList}
        <div className="product">
          <img
            className="product-image"
            src={products[0].image}
            alt="Gingerbread Cookies"
          ></img>
          <h3>{products[0].name}</h3>
          <h5>{products[0].price}</h5>
        </div>
        <div className="product">
          <img
            className="product-image"
            src={products[1].image}
            alt="Oatmeal Raisin Cookies"
          ></img>
          <h3>{products[1].name}</h3>
          <h5>{products[1].price}</h5>
        </div>
      </div>
    </body>
  );
}

export default App;
