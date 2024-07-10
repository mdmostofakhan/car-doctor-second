import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
  const { title, img, price } = product;

  return (
    <div className="card bg-base-100 my-10 shadow-xl ">
      <figure>
        <img className="w-[160px] " src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Rating
          placeholderRating={3.5}
          emptySymbol={<FaStar className="text-yellow-500"></FaStar>}
          placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
          fullSymbol={<FaStar></FaStar>}
          readonly
        ></Rating>
        <h2 className="card-title justify-center font-bold ">{title}</h2>
        <p className="text-red-700">price: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
