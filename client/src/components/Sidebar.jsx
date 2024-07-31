import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";

const Sidebar = ({closeSidebar}) => {

    // const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);


    const CloseButton = () => {
        setClose(prev => !prev)
    };


        return (
            <div className='fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4'>
                <div className='flex flex-row gap-2 w-full'>
                    <CgProfile className='text-2xl' />
                    <label>Hello ,</label>
                    <button>Sign in</button>
                    
                    <div className='ml-8'><button onClick={closeSidebar} className='text-white text-2xl'><FaWindowClose /></button></div>
                </div>
                
                <ul className='mt-4'>
                    <li className='mb-2'><a href='#'>Home</a></li>
                    <li className='mb-2'><a href='#'>Products</a></li>
                    <li className='mb-2'><a href='#'>Contact</a></li>
                    {/* Add more sidebar links as needed */}
                </ul>
            </div>
        )
}

export default Sidebar
