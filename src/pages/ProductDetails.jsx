import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "60px" }}>Product Details</h1>
      {product ? (
        <div className="productContainer" key={product.id}>
          <div className="leftContainer">
            <img src={product.thumbnail} />
          </div>
          <div className="rightContainer">
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <h2>${product.price}</h2>
          </div>
        </div>
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default ProductDetails;
