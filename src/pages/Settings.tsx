import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import axios from 'axios'
import user from "../assets/user.avif"
import { IoPeople } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {

}


const Settings = (props: Props) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);


    const handleUpdate = () => {

    }

    const handleDelete = () => {

    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <>
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover'>
                <div className="flex flex-col lg:flex-row h-full">

                <div className='w-full lg:w-1/5 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10'>
                            <div className='mt-4 relative cursor-pointer'>
                                <button className='lg:hidden absolute top-0 right-4 text-xl focus:outline-none' onClick={toggleMenu}>
                                    {showMenu ? <CiMenuBurger /> : <IoIosCloseCircle />}
                                </button>
                                <div className=''>
                                    {!showMenu && <Menu />}
                                </div>

                            </div>
                        </div>

                    <div className="flex flex-col items-center justify-center w-full lg:w-full p-4 lg:p-10 border border-solid rounded-lg shadow-panelShadow">
                        <div className="w-full lg:w-full p-4 lg:p-10">
                            <div className="border border-solid p-4 rounded-lg  shadow-panelShadow">
                                <h2 className="text-lg font-semibold mb-4">My Details</h2>
                                <div className='flex rounded-lg'>
                                    <div className='w-full mr-4 flex gap-5'>
                                        <img src={user} className='rounded-full w-1/3' alt='User Avatar' />
                                        <div className='flex flex-col justify-center items-center gap-5'>
                                            <button className='bg-blue-500 hover:bg-green-500 text-white sm:font-medium text-[15px] sm:py-2 sm:px-4 p-1  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>Update Image</button>
                                            <button className='bg-red-500 hover:bg-green-500 text-white sm:font-medium text-[15px] sm:py-2 sm:px-4 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400'>Delete Image</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <form className='mt-5'>
    <div className='flex flex-col md:flex-row items-start'>
        <div className='flex flex-col gap-5 mt-5 w-full md:w-[70%]'>
            <div className='w-full'>
                <label className=''>Your Name:</label>
                <input type="text" className='border border-gray-300 rounded-md p-2 w-full text-[15px]' placeholder='Ravi Pankhaniya' />
            </div>
            <div className='w-full'>
                <label>Your Email:</label>
                <input type="text" className='border border-gray-300 rounded-md p-2 w-full text-[15px] ' placeholder='pankhaniyaravi05@gmail.com' />
            </div>
            <div className='w-full'>
                <label>Your Contact:</label>
                <input type="text" className='border border-gray-300 rounded-md p-2 w-full text-[15px] ' placeholder='+91 8849129947' />
            </div>
        </div>
        <div className='flex flex-col gap-5 mt-[75px] ml-0 md:ml-10'>
            <button className='bg-blue-500 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' onClick={handleUpdate}>Update Profile</button>
            <button className='bg-red-500 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400' onClick={handleDelete}>Delete Profile</button>
        </div>
    </div>
</form>

                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Settings