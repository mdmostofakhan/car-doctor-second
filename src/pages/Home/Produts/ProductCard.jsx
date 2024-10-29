import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, img, price } = product;

  return (
    <div className="card bg-base-100 my-10 shadow-xl ">
      <figure>
        <img className=" " src={img} alt="Shoes" />
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
        <div className="border w-32 rounded-lg flex justify-center bg-orange-500  transform mx-auto h-12 hover:bg-orange-400">
          <Link to={`/checkout/${_id}`}>
            <button className="text-xl  font-bold text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
