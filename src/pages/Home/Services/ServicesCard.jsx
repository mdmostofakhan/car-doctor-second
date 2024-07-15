import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-left">
          <h2 className="card-title">{title}</h2>
          <p>Price: $ {price}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button>
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
