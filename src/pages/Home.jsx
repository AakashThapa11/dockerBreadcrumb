import { useEffect, useState } from "react";
import "../style/Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const topSixProducts = data.products.splice(0, 6);
        setTrendingProducts(topSixProducts);
      });
  }, []);
  return (
    <div className="mainContainer">
      <h1>Thapa Store</h1>
      <h3>Home Page</h3>
      <h3>Trending Products 🔥</h3>
      <div className="products-grid">
        {trendingProducts.map((products) => {
          return (
            <div className="card" key={products.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${products.id}`}
              >
                <img className="product-img" src={products.thumbnail}></img>
                <h3 className="product-title">{products.title}</h3>
                <h4 className="product-price">${products.price}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <button>
        <Link to={"/products"} style={{ textDecoration: "none" }}>
          <h3 style={{ textDecorationLine: "none", color: "black" }}>
            View All Products
          </h3>
        </Link>
      </button>
    </div>
  );
};

export default Home;
