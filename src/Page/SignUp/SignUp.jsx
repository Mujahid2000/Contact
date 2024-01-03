import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {
    const { createUser, user } = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/')
        }
    }, [user])

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
            setPasswordError("Password must contain at least one special character.");
            return;
        }
        createUser(email, password)
            .then(() => {
                Swal.fire(
                    'Registration Successful!',
                    'You have successfully registered.',
                    'success'
                );

            })
            .catch(error => {
              
                if (error.code === 'auth/email-already-in-use') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already in use!',
                    });
                }
            });
    };

  return (
    <div>
            
        <div className="min-h-screen flex items-center px-4 mb-4 justify-center bg-gradient-to-b from-indigo-600 to-indigo-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Sign Up</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your name"
                />
                </div>
                <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your email"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your password"
                />
                </div>
                <div className="mb-6">
                <label
                    htmlFor="photoURL"
                    className="block text-gray-700 text-sm font-medium mb-2"
                >
                    Photo URL
                </label>
                <div className="relative rounded-md shadow-sm">
                    <input
                    type="text"
                    id="photoURL"
                    name="photoURL"
                    className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    placeholder="Enter your photo URL"
                    />
                    <div className="absolute top-2 right-2 text-indigo-600">
                    <FaCamera />
                    </div>
                </div>
                </div>
                <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                Sign Up
                </button>
            </form>
                <div className="flex gap-4 justify-center mt-4">
            
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-indigo-600">
                Log in
                </a>
            </p>
            </div>
        </div>
        </div>
  );
};

export default SignUp;