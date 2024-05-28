import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const { error, status } = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-red-500">{status || 404}</h1>
                    <h2 className="text-2xl font-semibold mt-4">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mt-2">{error?.message || 'The page you are looking for does not exist or an unexpected error has occurred.'}</p>
                    <div className="mt-6">
                        <Link to="/">
                            <button className="btn btn-primary">Go to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
