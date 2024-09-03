import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://server.razcofoods.net/api/v1/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-5 px-10 mt-10">
      {products.map((product, index) => (
        <div key={index} className="border rounded shadow p-5">
          <img src={product.productImage[0]} alt="" className="w-full" />
          <h2 className="text-lg font-semibold">{product.productName}</h2>
          <h2>{product.description}</h2>
          <h2>${product.price}</h2>
          <Link to={`/product/${product._id}`}>
            <button className="bg-indigo-500 text-white rounded, py-2 px-6 mt-4 ">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
