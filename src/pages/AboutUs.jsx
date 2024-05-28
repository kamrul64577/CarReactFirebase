import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="mb-8">
                            <img src="https://media.umbraco.io/suzuki-gb/pxaktojp/motion-silky-silver.png?width=750&quality=75&format=webp" alt="About Us" className="w-full rounded-lg shadow-md" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum tortor quis nunc malesuada, ac lobortis purus eleifend. Nam posuere eros vel eros blandit, id bibendum dui volutpat. Sed auctor tellus a ipsum tristique vehicula. Ut vel lacinia nunc, non vestibulum libero.</p>
                            <p className="text-lg text-gray-700 mb-4">In id purus scelerisque, fringilla metus ac, efficitur dolor. Vivamus a lectus id justo ultricies lacinia. Donec fermentum nisi a urna placerat, sed elementum est posuere. Nullam at lorem ipsum. Proin vehicula massa et leo tincidunt, a molestie neque lacinia.</p>
                            <p className="text-lg text-gray-700 mb-4">Phasellus nec turpis in purus fermentum venenatis. Donec nec velit vel erat aliquam bibendum vitae at lorem. Integer ullamcorper vehicula risus, sed euismod justo auctor id.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
