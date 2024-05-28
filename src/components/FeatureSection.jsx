import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-5xl text-indigo-600 mb-4"><i className="fas fa-car"></i></div>
                        <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                        <p className="text-gray-600">Choose from a wide range of cars to suit your needs and preferences.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-5xl text-indigo-600 mb-4"><i className="fas fa-dollar-sign"></i></div>
                        <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
                        <p className="text-gray-600">Find great deals on high-quality cars that fit your budget.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-5xl text-indigo-600 mb-4"><i className="fas fa-shipping-fast"></i></div>
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-gray-600">Get your car delivered to your doorstep quickly and conveniently.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-5xl text-indigo-600 mb-4"><i className="fas fa-headset"></i></div>
                        <h3 className="text-xl font-semibold mb-2">Excellent Support</h3>
                        <p className="text-gray-600">Our friendly customer support team is here to assist you every step of the way.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;

