import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { Link } from 'react-router-dom';

type Props = {}

const Menu = (props: Props) => {
  return (
    <>
    <div className="min-h-screen  flex flex-row">
                                <div className="flex flex-col w-56 rounded-r-3xl overflow-hidden">
                                    <ul className="flex flex-col py-4">
                                       
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 hover:bg-blue-200 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <RxDashboard />
                                                </span>
                                                <span className="text-sm font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                      
                                        <Link to="/transaction">
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform  hover:bg-blue-200  hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <AiOutlineTransaction />
                                                </span>
                                                <span className="text-sm font-medium">Transaction</span>
                                            </a>
                                        </li>
                                        </Link>
                                        <Link to="/category">
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform  hover:bg-blue-200  hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <MdOutlineCategory />
                                                </span>
                                                <span className="text-sm font-medium">Category</span>
                                            </a>
                                        </li>
                                        </Link>

                                        <Link to="/account">
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform  hover:bg-blue-200  hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <MdAccountBalance />
                                                </span>
                                                <span className="text-sm font-medium">Account</span>
                                            </a>
                                        </li>
                                        </Link>

                                        <Link to="/profile">
                                        <li>
                                            <a href="#" className="flex flex-row items-center  hover:bg-blue-200  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <CgProfile />
                                                </span>
                                                <span className="text-sm font-medium">Profile</span>
                                            </a>
                                        </li>
                                        </Link>

                                        <Link to="/setting">
                                        <li>
                                            <a href="#" className="flex flex-row items-center  hover:bg-blue-200  h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <IoSettingsOutline />
                                                </span>
                                                <span className="text-sm font-medium">Setting</span>
                                            </a>
                                        </li>
                                        </Link>
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform  hover:bg-blue-200  hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <IoMdNotificationsOutline />
                                                </span>
                                                <span className="text-sm font-medium">Notifications</span>
                                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                                            </a>
                                        </li>

                                        <Link to="/faq">
                                        
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12 transform  hover:bg-blue-200  hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <FaRegQuestionCircle />
                                                </span>
                                                <span className="text-sm font-medium">Ask a Question?</span>
                                            </a>
                                        </li>
                                        </Link>
                                        <Link to="/login">
                                        <li>
                                            <a href="#" className="flex flex-row items-center h-12  hover:bg-blue-200  transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                                                    <AiOutlineLogout />
                                                </span>
                                                <span className="text-sm font-medium">Logout</span>
                                            </a>
                                        </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
    </>
  )
}

export default Menu