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
        <div className='flex flex-row items-center justify-evenly p-4'>

            <div onClick={OpenSideBar} className='flex flex-row items-center justify-center gap-4'>
                <div><FaBars className='text-2xl' /></div>
                <div><img src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="nike image" className='w-32 h-12' /></div>
            </div>

            <div className='flex flex-row items-center'>
                <input
                    type="text"
                    className='border-2 border-gray-200 rounded-l-2xl w-80 h-8 pl-3'
                    placeholder='search product here...'
                />
                <div className=' w-14 h-8 bg-red-600 flex items-center justify-center rounded-r-2xl'>
                    <FaSearch className='text-xl text-white' />
                </div>
            </div>


            <div className='flex flex-row gap-5 items-center justify-center'>
                <div>
                    <CgProfile className='text-2xl' />
                </div>

                <div className='relative'>
                    <FaShoppingCart className='text-2xl' onClick={OpenCartComponent} />
                    <span className='bg-red-500 w-6 text-white rounded-xl absolute bottom-4 left-4 flex items-center justify-center'>{totalCartItem}</span>
                </div>

                <div>
                    {
                        isAuthenticated ?
                            <button className='bg-red-600 text-white pr-2 pl-2 pt-1 pb-1 rounded-3xl' onClick={logoutFun}>
                                Logout
                            </button>
                            :
                            <button className='bg-red-600 text-white pr-2 pl-2 pt-1 pb-1 rounded-3xl'>
                                <Link to={"/signin"}>
                                    Sign In
                                </Link>
                            </button>
                    }
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
