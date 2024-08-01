
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

const Sidebar = ({ closeSidebar }) => {
    const [openSubRoutes, setOpenSubRoutes] = useState({});

    const toggleSubRoutes = (path) => {
        setOpenSubRoutes(prev => ({
            ...prev,
            [path]: !prev[path]
        }));
    };

    const routes = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />,
        },
        {
            path: "/users",
            name: "Users",
            icon: <FaUser />,
        },
        {
            path: "/messages",
            name: "Messages",
            icon: <MdMessage />,
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <BiAnalyse />,
        },
        {
            path: "/file-manager",
            name: "File Manager",
            icon: <AiTwotoneFileExclamation />,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
        },
        {
            path: "/order",
            name: "Order",
            icon: <BsCartCheck />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <BiCog />,
            exact: true,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
        },
        {
            path: "/saved",
            name: "Saved",
            icon: <AiFillHeart />,
        },
    ];

    return (
        <div className='fixed top-0 left-0 w-56 h-full bg-gray-800 text-white p-4 z-10'>
            <div className='flex flex-row gap-1 w-full mt-3'>
                <CgProfile className='text-2xl' />
                <div>
                    <label>Hello </label>
                    <button>Sign in</button>
                </div>

                <div className='ml-8'>
                    <button onClick={closeSidebar} className='text-white text-2xl'>
                        <FaWindowClose />
                    </button>
                </div>
            </div>

            <ul className='flex flex-col gap-5 mt-4'>
                {routes.map((route) => (
                    <li key={route.path}>
                        <div className='flex flex-row items-center gap-2'>
                            <Link to={route.path} className='flex flex-row items-center gap-2'>
                                <div>{route.icon}</div>
                                <div>{route.name}</div>
                            </Link>
                            {route.subRoutes && (
                                <MdKeyboardArrowDown
                                    onClick={() => toggleSubRoutes(route.path)}
                                    className={`cursor-pointer ${openSubRoutes[route.path] ? 'rotate-180' : ''}`}
                                />
                            )}
                        </div>
                        {route.subRoutes && openSubRoutes[route.path] && (
                            <ul className='pl-6 mt-2'>
                                {route.subRoutes.map((subRoute) => (
                                    <li key={subRoute.path}>
                                        <Link to={subRoute.path} className='flex flex-row items-center gap-2'>
                                            <div>{subRoute.icon}</div>
                                            <div>{subRoute.name}</div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
