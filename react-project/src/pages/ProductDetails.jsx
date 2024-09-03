import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null); // Initialize as null

  useEffect(() => {
    setLoading(true);
    fetch(`https://server.razcofoods.net/api/v1/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>; // Handle case where product data is null
  }

  return (
    <div className="shadow rounded p-10 flex flex-col items-center justify-center">
      {/* <div>
        {product.productImage && product.productImage.length > 0 ? (
          product.productImage.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full mb-4"
            />
          ))
        ) : (
          <img
            src="/placeholder-image.png"
            alt="Placeholder"
            className="w-full"
          />
        )}
      </div> */}

      <div>
        {product.productImage && product.productImage.length > 0 ? (
          product.productImage.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full mb-4"
            />
          ))
        ) : (
          <img
            src="/placeholder-image.png"
            alt="Placeholder"
            className="w-full"
          />
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <p>{product.status}</p>
      </div>
    </div>
  );
}

/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://server.razcofoods.net/api/v1/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      });
  }, [productId]);
  console.log(loading);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="shadow rounded p-10 flex flex-col items-center justify-center">
      <div>
        <img src={product.productImage[]} alt="" className="w-full" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <h2>{product.description}</h2>
        <h2>${product.price}</h2>
        <p>{product.status}</p>
      </div>
    </div>
  );
}
*/
