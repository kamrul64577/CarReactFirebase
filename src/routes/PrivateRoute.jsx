import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center space-x-2">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
                <div className="text-blue-500 text-xl font-semibold">Loading...</div>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />

}

export default PrivateRoute
