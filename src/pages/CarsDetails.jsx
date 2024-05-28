import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CarsDetails = () => {
    const car = useLoaderData();
    const { model, make, color, price, year, image } = car;
    return (
        <div className="container mx-auto mt-10 p-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    className="w-full h-64 object-cover"
                    src={image}
                    alt={`${make} ${model}`}
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{make} {model}</h2>
                    <p className="text-gray-700 mb-4">Year: {year}</p>
                    <p className="text-gray-700 mb-4">Color: {color}</p>
                    <p className="text-xl font-semibold text-gray-800 mb-4">Price: ${price.toLocaleString()}</p>
                    <div className='bg-base-200 p-5 mb-4 rounded-tl-3xl rounded-br-3xl'>
                        <h5 className='font-bold mb-2'>Description</h5>
                        <p className="text-gray-600 mb-4">The Toyota Camry is a comfortable, reliable, and efficient mid-size sedan. It offers a spacious interior, advanced safety features, and a smooth ride. Perfect for both city driving and long trips.</p>
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarsDetails
