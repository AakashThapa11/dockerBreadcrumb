import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [allProducts, setALlProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setALlProducts(data.products);
      });
  }, []);
  return (
    <div className="mainContainer">
      <h1>Thapa Store</h1>
      <h3>All Products List</h3>
      <div className="products-grid">
        {allProducts.map((products) => {
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
    </div>
  );
};

export default ProductListing;
