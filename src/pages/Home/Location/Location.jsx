import moment from "moment";
import { FaPhone, FaRegCalendarAlt, FaRegStar, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Rating from "react-rating";

const Location = () => {
  const now = moment();
  const formattedTime = now.format("YYYY-MM-DD hh:mm A");

  return (
    <div>
      <div className="bg-black w-[1250px] h-[240px] flex justify-center items-center gap-12 rounded-2xl my-12">
        <div className="flex items-center gap-4">
          <p className="text-4xl text-white">
            <FaRegCalendarAlt />
          </p>
          <div>
            <h1 className="text-white">We are open monday-friday</h1>
            <p className="text-2xl font-bold text-white">{formattedTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-2xl text-red-500">
            <FaPhone />
          </p>
          <div>
            <h1 className="text-white">Have a question?</h1>
            <p className="text-white"> +29736473808</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-2xl text-red-500">
            <FaLocationDot />
          </p>
          <div>
            <p className="text-white">Need a repair? our address</p>
            <h1 className="text-2xl font-bold text-white">
              Liza Street, New York
            </h1>
          </div>
          <div className="text-yellow-400">
            <Rating
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
