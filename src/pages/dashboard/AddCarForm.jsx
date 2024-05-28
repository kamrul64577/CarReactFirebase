import { useState } from 'react';

const AddCarForm = () => {

    const handleAddCar = async (e) => {
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

        await fetch(`http://localhost:3000/cars`, {
            method: "POST",
            headers: {
                "content-type": "application.json"
            },

            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
            })
    }

    return (
        <div className="container mx-auto m-16  pb-16 ">
            <form onSubmit={handleAddCar} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Add New Car</h2>

                <div className="form-control mb-4">
                    <label className="label" htmlFor="make">
                        <span className="label-text">Make</span>
                    </label>
                    <input
                        type="text"
                        name="make"
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
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full">Add Car</button>
            </form>
        </div>
    );
};

export default AddCarForm;
