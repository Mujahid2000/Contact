import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {  BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from , {replace: true});
        })
    }
    const handleGoogleSignIn = () => {
        googleLogin().then((result) => {
        console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
        };
       
        navigate('/')
        });
    };

    
    
      
      
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-3">
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleLogin} className="space-y-6" >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
        <div>
        <div className="flex gap-10 justify-center mt-6">
            <button className="inline-block  bg-neutral-100 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg">
            <BsGoogle onClick={handleGoogleSignIn} className=" rounded-full bg-white w-6 h-6" ></BsGoogle>
            </button>
        </div>
        </div>
    </form>
    
</div>

        </div>
    );
};

export default Login;