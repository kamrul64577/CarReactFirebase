
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCarsDashboard = ({ car, onDelete }) => {
    const { id, make, model, year, color, price, image } = car;

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/cars/${id}`,{
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Car successfully deleted");
                console.log(data)
                onDelete(id)
            })
    }

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
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-2 rounded">
                        <Link to={`/product/${id}`}>See Details</Link>
                    </button>
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-2 rounded">
                        <Link to={`/dashboard/edit-car/${id}`}>Edit</Link>
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCarsDashboard;

