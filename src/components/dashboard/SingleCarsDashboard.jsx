import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCarsDashboard = ({ car, onDelete }) => {
    const { id, make, model, year, color, price, image } = car;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/cars/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Car successfully deleted");
                console.log(data);
                onDelete(id);
            })
            .catch(err => {
                toast.error("Error deleting car");
                console.error(err);
            });
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 w-full sm:w-96 mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="h-64 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={`${make} ${model}`}
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">{make} <span className='text-red-400'>{model}</span> </h2>
                    <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                        {year}
                    </span>
                </div>
                <p className="text-gray-600 mb-4">Color: {color}</p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-gray-800">
                        ${price.toLocaleString()}
                    </span>
                </div>
                <div className="flex space-x-2">
                    <Link to={`/product/${id}`} className="flex-1 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-center">
                        Details
                    </Link>
                    <Link to={`/dashboard/edit-car/${id}`} className="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center">
                        Edit
                    </Link>
                    <button onClick={handleDelete} className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCarsDashboard;




