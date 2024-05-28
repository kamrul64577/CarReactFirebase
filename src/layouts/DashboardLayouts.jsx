import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayouts() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex min-h-screen">
            <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-indigo-600 text-white p-4 transform
             ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out  `}>
            <div className="flex justify-between mb-6">
                <span className="text-2xl font-bold">Menu</span>
                <button aria-label="Close Sidebar" className="text-white focus:outline-none" onClick={toggleDrawer}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <ul className="space-y-4 ">
                <li>
                    <Link to="/dashboard" className="text-lg hover:text-indigo-200">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/all-cars" className="text-lg hover:text-indigo-200">All Cars</Link>
                </li>
                <li>
                    <Link to="/dashboard/add-car" className="text-lg hover:text-indigo-200">Add Car</Link>
                </li>
                <li>
                    <Link to="/" className="text-lg hover:text-indigo-200">Home</Link>
                </li>
            </ul>
        </aside>

            {/* Main Content */}
            <div className="flex-1 ">
                <header className="p-4 bg-gray-100 ">
                    <button className="btn btn-primary" onClick={toggleDrawer}>
                        ☰
                    </button>
                </header>
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
