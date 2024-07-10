import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;

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
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
