import React from 'react';
import { FcExpired } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const VerificationLinkExpired = () => {
    return (
        <div className="flex items-center justify-center h-screen px-4">
            <div className="flex flex-col items-center text-center">
                <FcExpired className="text-8xl md:text-[10rem] mb-4" />
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Oops! It looks like your verification link has expired
                </h2>
                <p className="mb-6 text-sm md:text-base">
                    Don't worry, you can easily create your account again by clicking the button below.
                </p>
                <Link to="/signup">
                    <button className="bg-[#1C4476] text-white p-medium px-6 py-2 rounded-full hover:bg-blue-600 transition duration-500">
                        Create Account
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default VerificationLinkExpired;