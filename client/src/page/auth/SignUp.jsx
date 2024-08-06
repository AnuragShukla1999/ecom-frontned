import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { email, password, name } = formData;


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.trim() });

        console.log(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch('http://localhost:7070/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const resData = await res.json();
            console.log(resData);


            navigate('/signin')
            if (res.ok) {
                setLoading(false);
                navigate('/signin')
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
                    htmlFor="name"
                    className="block mb-1 text-gray-800 font-bold"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="enter name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md box-border"
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div className="w-full mb-4">
                <label
                    htmlFor="email"
                    className="block mb-1 text-gray-800 font-bold"
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
                    className="block mb-1 text-gray-800 font-bold"
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
                {loading ? "Loading ...." : "Sign Up"}
            </button>

            <div className="mt-4">
                <Link to="/signin" className="text-blue-500 hover:underline">
                    Signin
                </Link>
            </div>
        </form>

    );
}

export default SignUp;