import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditCar = () => {
    const cars = useLoaderData();

    const [make, setMake] = useState(cars.make);
    const [model, setModel] = useState(cars.model);
    const [year, setYear] = useState(cars.year);
    const [color, setColor] = useState(cars.color);
    const [price, setPrice] = useState(cars.price);
    const [image, setImage] = useState(cars.image);
    const [id, setId] = useState(cars.id);


    const handleEditCar = async (e) => {
        e.preventDefault();

        const form = e.target;
        const make = form.make.value;
        const model = form.model.value;
        const year = form.year.value;
        const color = form.color.value;
        const price = form.price.value;
        const image = form.image.value;
        const id = form.id.value;
        const data = { make, model, year, color, price, image, id }
        console.log(data);

        try {
            const response = await fetch(`http://localhost:3000/cars/${cars.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success("Car successfully updated")

                form.reset();
            } else {
             
                throw new Error('Failed to update car');
            }
        } catch (error) {
            console.error('Error updating car:', error);
          
            toast.error("Failed to update car")
        }
    }

    return (
        <div className="container mx-auto m-16  pb-16 ">
            <form onSubmit={handleEditCar} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Update Car Details</h2>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="make">
                        <span className="label-text">Make</span>
                    </label>
                    <input
                        type="text"
                        name="make"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="model">
                        <span className="label-text">Model</span>
                    </label>
                    <input
                        type="text"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="year">
                        <span className="label-text">Year</span>
                    </label>
                    <input
                        type="number"
                        name="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="color">
                        <span className="label-text">Color</span>
                    </label>
                    <input
                        type="text"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="price">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="image">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label" htmlFor="id">
                        <span className="label-text">ID</span>
                    </label>
                    <input
                        type="number"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">Update Car</button>
            </form>
        </div>
    );
}

export default EditCar;
