import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginImg from "../assets/login.webp";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("user Register",{
            name,
            email,
            password,
            confirmPassword,
        });
    };

    return (

        <div className='min-h-screen flex bg-gray-100'>

            {/* Left Side */}
            <div className='w-full md:w-1/2 flex items-center justify-center px-6 py-12'>

                <div className='w-full max-w-lg'>

                    <form
                        onSubmit={handleSubmit}
                        className='bg-white p-8 md:p-10 rounded-2xl shadow-lg border'
                    >

                        {/* Logo */}
                        <div className='flex justify-center mb-6'>

                            <h2 className='text-4xl font-bold tracking-tight'>
                                trendwear
                            </h2>

                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl font-bold text-center mb-2">
                            Create Account 🚀
                        </h2>

                        <p className="text-center text-gray-500 mb-8">
                            Register your account to continue
                        </p>

                        {/* Name */}
                        <div className="mb-5">

                            <label className="block text-sm font-semibold mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your full name"
                                required
                            />

                        </div>

                        {/* Email */}
                        <div className="mb-5">

                            <label className="block text-sm font-semibold mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email address"
                                required
                            />

                        </div>

                        {/* Password */}
                        <div className="mb-5">

                            <label className="block text-sm font-semibold mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your password"
                                required
                            />

                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">

                            <label className="block text-sm font-semibold mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Confirm your password"
                                required
                            />

                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Register
                        </button>

                        {/* Login Link */}
                        <p className='mt-6 text-center text-sm text-gray-600'>

                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className='text-blue-500 hover:underline font-medium'
                            >
                                Login
                            </Link>

                        </p>

                    </form>

                </div>

            </div>

            {/* Right Side Image */}
            <div className="hidden md:block md:w-1/2">

                <img
                    src={LoginImg}
                    alt="Register"
                    className="w-full h-screen object-cover"
                />

            </div>

        </div>
    )
}

export default Register