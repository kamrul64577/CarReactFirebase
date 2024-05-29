import React from 'react';

const TeamMember = ({ name, position, image, description }) => (
    <div className="flex flex-col items-center justify-center p-4 transform transition duration-300 hover:scale-105">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-36 h-36 object-cover" src={image} alt={name} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{position}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    </div>
);

const OurTeamSection = () => (
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TeamMember
                    name="John Doe"
                    position="CEO"
                    image="https://i.ytimg.com/vi/cFyi2DKFVuA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzNkf2JgQcUJjGVOmhMcJenS3nzw"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel enim vitae felis fringilla vulputate."
                />
                <TeamMember
                    name="Jane Smith"
                    position="Sales Manager"
                    image="https://i.ytimg.com/vi/cFyi2DKFVuA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzNkf2JgQcUJjGVOmhMcJenS3nzw"
                    description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                />
                <TeamMember
                    name="David Johnson"
                    position="Marketing Specialist"
                    image="https://i.ytimg.com/vi/cFyi2DKFVuA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzNkf2JgQcUJjGVOmhMcJenS3nzw"
                    description="Vivamus non elit quis leo volutpat porta. Aliquam vestibulum augue sit amet fermentum facilisis."
                />
                {/* Add more TeamMember components for additional team members */}
            </div>
        </div>
    </section>
);

export default OurTeamSection;

