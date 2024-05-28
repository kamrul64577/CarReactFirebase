
import { Link } from 'react-router-dom';

const SingleCars = ({ car }) => {
  const {id, make, model, year, color, price, image } = car;

  return (
    <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <img
        className=""
        src={image}
        alt={`${make} ${model}`}
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{make} {model}</h2>
          <span className="bg-red-500 text-white px-2 py-1 rounded-full">
            {year}
          </span>
        </div>
        <p className="text-gray-600 mb-4">Color: {color}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            ${price.toLocaleString()}
          </span>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <Link to={`/product/${id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCars;
