import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa"; // Import filled and empty stars

const StarRate = (props) => {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rating || 2);

  const handleClick = (i) => {
    setRating(i + 1);
  };

  return (
    <div className="flex space-x-3 justify-center mt-3">
      {[...Array(limit)].map((_, i) => (
        <span
          key={i}
          className="text-3xl"
          // className="cursor-pointer text-3xl transition-transform transform hover:scale-125"
          // onClick={() => handleClick(i)}
        >
          {i < rating ? <FaStar className="text-yellow-600" /> : <FaRegStar className="text-gray-400" />}
        </span>
      ))}
    </div>
  );
};

export default StarRate;