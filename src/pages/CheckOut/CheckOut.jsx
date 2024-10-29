import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const [products, setProducts] = useState([]);

  const { _id } = useParams();

  useEffect(() => {
    fetch("../../../public/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.find((product) => product?._id === _id));
      });
  }, [products]);

  console.log(products);

  return (
    <div>
      <h1>Book know services: {products.title}</h1>
    </div>
  );
};

export default CheckOut;
