
import { useState } from "react";
import { Helmet } from "react-helmet";



import { Link } from "react-router-dom";

const Error = () => {
        const [isPunched, setIsPunched] = useState(false);

        const handleButtonClick = () => {
        setIsPunched(true);
    
        setTimeout(() => {
            setIsPunched(false);
        }, 300);
        };
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
        <Helmet>
            <title> This is error Page</title>
        </Helmet>
        <Link to={'/'}>
        <button
            className={`${
            isPunched ? 'transform rotate-12 scale-110' : ''
            } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform ease-in-out duration-300`}
            onClick={handleButtonClick}
        >
            Back
        </button>
        </Link>

        <img
            className="mx-auto items-center"
            src="https://i.ibb.co/fd9fXv0/paradise-404-illustration.gif"
            alt=""
        />
        </div>
    );
};

export default Error;
