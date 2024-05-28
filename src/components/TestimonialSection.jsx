import React from 'react';

const TestimonialSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-lg mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec est sed neque faucibus ullamcorper. Etiam fermentum mauris vitae blandit tempor."</p>
                        <p className="text-gray-600">- John Doe</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-lg mb-4">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam rutrum velit eu risus suscipit, vitae placerat nisl malesuada."</p>
                        <p className="text-gray-600">- Jane Smith</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-lg mb-4">"Sed quis diam rhoncus, molestie mi eget, vulputate purus. Nullam finibus, nunc eget tincidunt tincidunt, libero urna consectetur justo, eu semper ipsum leo a nunc."</p>
                        <p className="text-gray-600">- Michael Johnson</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
