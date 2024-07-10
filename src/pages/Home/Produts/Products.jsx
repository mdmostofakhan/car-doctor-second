import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../../public/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="text-center space-y-3">
      <h1 className="text-orange-500">Popular Products</h1>
      <h1 className="text-black text-2xl font-bold">Browse Our Products</h1>
      <p>
        the majority have suffered alteration in some form, by injected humour,{" "}
        <br />
        or randomised words which look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 ">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
