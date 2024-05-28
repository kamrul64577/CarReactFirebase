import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const [matchPass, setMatchPass] = useState(true)
    const { user, createUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setMatchPass(false)
        }

        if (password == confirmPassword) {
            createUser(name, email, phoneNumber, password)

        }
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, navigate, from])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card w-full max-w-sm shadow-2xl bg-white">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold mb-4">Create a New Account</h2>
                    <form onSubmit={handleRegister}>
                        {/* Name Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        {/* Email Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                    
                        {/* Password Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        {/*Confirm Password Input */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Password" className="input input-bordered" required />
                        </div>
                        {!matchPass && (
                            <div className='text-center mt-4'>
                                <p className='text-red-700 font-semibold'>Passwords do not match</p>
                            </div>
                        )}
                        {/* Register Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {/* Sign Up Link */}
                    <p className="text-center mt-4">
                        Already have an account? <a href="#" className="link link-primary">Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
