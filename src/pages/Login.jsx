import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginImg from "../assets/login.webp";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log({
            email,
            password,
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
                            Welcome Back 👋
                        </h2>

                        <p className="text-center text-gray-500 mb-8">
                            Enter your email and password
                        </p>

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
                        <div className="mb-6">

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

                        {/* Forgot Password */}
                        <div className='flex justify-end mb-6'>

                            <Link
                                to="/forgot-password"
                                className='text-sm text-blue-500 hover:underline'
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Login
                        </button>

                        {/* Register */}
                        <p className='mt-6 text-center text-sm text-gray-600'>

                            Don't have an account?{" "}

                            <Link
                                to="/register"
                                className='text-blue-500 hover:underline font-medium'
                            >
                                Register
                            </Link>

                        </p>

                    </form>

                </div>

            </div>

            {/* Right Side Image */}
            <div className="hidden md:block md:w-1/2">

                <img
                    src={LoginImg}
                    alt="Login"
                    className="w-full h-screen object-cover"
                />

            </div>

        </div>
    )
}

export default Login