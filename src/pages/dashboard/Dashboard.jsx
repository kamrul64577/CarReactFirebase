import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <h2 className="text-xl font-semibold mb-2">Welcome, {user.displayName}!</h2>
                <p className="text-gray-600 mb-4">Here are your account details:</p>
                <div className="mb-2">
                    <strong className="block mb-1">Name:</strong>
                    <span>{user.displayName}</span>
                </div>
                <div className="mb-2">
                    <strong className="block mb-1">Email:</strong>
                    <span>{user.email}</span>
                </div>
                <div>
                    <strong className="block mb-1">ID:</strong>
                    <span>{user.uid}</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
