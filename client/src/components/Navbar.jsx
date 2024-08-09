import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/userSlice';
import { selectTotalCartItems } from '../redux/Slices/cartSlice';
import Cart from './Cart';

const Navbar = () => {

    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);

    // const isUser = localStorage.getItem('currentUser');

    const totalCartItem = useSelector(selectTotalCartItems)

    const [openSidebar, setOpenSidebar] = useState(false);


    const OpenSideBar = () => {
        setOpenSidebar(prev => !prev);
        console.log("side bar is opened")
    };

    const closeSidebar = () => {
        setOpenSidebar(false);
    };


    const logoutFun = () => {
        dispatch(logout())
    }



    const [openCart, setOpenCart] = useState(false);

    const OpenCartComponent = () => {
        setOpenCart(prev => !prev);
    };


    const closeCartComponent = () => {
        setOpenCart(false)
    }


    return (
        <div className='flex items-center justify-between p-4 bg-gray-200 text-white shadow-md'>
            {/* Logo and Sidebar Toggle */}
            <div className='flex items-center gap-4 cursor-pointer'>
                <FaBars onClick={OpenSideBar} className='text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-200' />
                <Link to='/'>
                    {/* <img
                        src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
                        alt="Logo"
                        className='w-32 h-auto'
                    /> */}

                    <h4 className='text-black font-extrabold'>LO<span className='text-yellow-500'>GO</span>HERE</h4>
                </Link>
            </div>

            {/* Search Bar */}
            <div className='flex items-center flex-grow mx-4'>
                <input
                    type="text"
                    className='border-2 border-gray-300 rounded-l-full w-full max-w-md h-10 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200'
                    placeholder='Search products...'
                />
                <div className='w-16 h-10 bg-red-600 flex items-center justify-center rounded-r-full cursor-pointer hover:bg-red-700 transition-colors duration-200'>
                    <FaSearch className='text-xl text-white' />
                </div>
            </div>

            {/* User Actions */}
            <div className='flex items-center gap-6'>
                <div className='relative cursor-pointer'>
                    <Link to="/user-profile">
                        <CgProfile className='text-2xl text-black hover:text-gray-400 transition-colors duration-200' />
                    </Link>
                </div>

                <div className='relative cursor-pointer' onClick={OpenCartComponent}>
                    <FaShoppingCart className='text-2xl text-black hover:text-gray-400 transition-colors duration-200' />
                    <span className='absolute -top-4 -right-4 bg-red-600 text-white w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full'>
                        {totalCartItem}
                    </span>
                </div>

                <div>
                    {isAuthenticated ? (
                        <button
                            className='bg-red-600 text-white py-1 px-4 rounded-full hover:bg-red-700 transition-colors duration-200'
                            onClick={logoutFun}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/signin">
                            <button className='bg-red-600 text-white py-1 px-4 rounded-full hover:bg-red-700 transition-colors duration-200'>
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            {openSidebar && (
                <Sidebar closeSidebar={closeSidebar} />
            )}

            {/* Cart */}
            {openCart && (
                <Cart closeCartComponent={closeCartComponent} />
            )}
        </div>

    )
}

export default Navbar
