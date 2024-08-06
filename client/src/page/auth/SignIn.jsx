import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin } from "../../redux/Slices/userSlice";


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
        console.log(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:7070/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const resData = await res.json();
            console.log(resData);

            if (res.ok) {
                dispatch(signin(resData.user));
                toast.success("Signed in successfully!");
                navigate("/");
            } else {
                toast.error("User not found")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            className="flex flex-col items-center w-full max-w-md mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100 mt-12"
            onSubmit={handleSubmit}
        >
            <div className="w-full mb-4">
                <label
                    htmlFor="email"
                    className="block mb-2 text-gray-700 font-bold"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="enter email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md box-border"
                    value={email}
                    onChange={handleChange}
                />
            </div>

            <div className="w-full mb-4">
                <label
                    htmlFor="password"
                    className="block mb-2 text-gray-700 font-bold"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md box-border"
                    value={password}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
                Sign In
            </button>

            <div className="mt-4">
                <Link to="/signup" className="text-blue-500 hover:underline">
                    SignUp
                </Link>
                <span className="mx-2 text-gray-600">|</span>
                <Link to="/" className="text-blue-500 hover:underline">
                    Home
                </Link>
            </div>
        </form>

    );
}

export default SignIn;