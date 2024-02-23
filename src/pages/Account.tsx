import { Link } from 'react-router-dom';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import bg from "../assets/hero-bg.png";
import { Filters } from '../components/Filter';

import { FaFilter } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Menu from '../components/Menu';
import atm from "../assets/atm2.png"
import sbi from "../assets/sbi.png"
import bob from "../assets/bob.png"

type Props = {};

const Account = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const [isFlipped, setIsFlipped] = useState(false);



    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedCategory(event.target.value);
    };



    const toggleForm = (): void => {
        setShowForm(!showForm);
    };

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <section className="flex items-center bg-no-repeat bg-center bg-cover min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-[20px] lg:w-1/4 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative">

                            <Menu />


                        </div>
                    </div>

                    <div className="flex-1 p-4 lg:p-10">
                        <div className="relative ml-[900px]">
                            <button onMouseEnter={toggleForm} className="bg-blue-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
                                Add Account
                            </button>
                            {showForm && (
                                <div className="absolute top-10 right-0 z-10 bg-white p-8 rounded-lg shadow-lg">
                                    {/* Your form elements go here */}
                                    <form className="space-y-4 w-[500px]">
                                        {/* Example input field */}
                                        <div>
                                            <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                                                Bank Name
                                            </label>
                                            <input
                                                type="text"
                                                id="transactionName"
                                                name="transactionName"
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                                                Account Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="transactionName"
                                                name="transactionName"
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                                                ISFC Code
                                            </label>
                                            <input
                                                type="text"
                                                id="transactionName"
                                                name="transactionName"
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                                                Email/Mobile
                                            </label>
                                            <input
                                                type="email"
                                                id="transactionName"
                                                name="transactionName"
                                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>

                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-evenly">
                            <div className={`relative ${isFlipped ? 'is-flipped' : ''}`} >
                                <img src={atm} alt="" className="w-full h-[500px] z-50" />
                                <div className="absolute top-0 left-10 flex items-center justify-center h-[275px] text-black">
                                    <h4 className="text-black font-bold">Debit Card</h4>
                                </div>
                                <div className="absolute top-0 right-10 flex items-center justify-center h-[275px] text-black">
                                    <h4 className="text-black font-bold">State Bank of India</h4>
                                    <img src={sbi} alt="" className='h-[20px] ml-2' />
                                </div>
                                <div className="absolute top-0 left-20 ml-12 right-0 flex items-center justify-center h-[475px] text-black">
                                    <h3 className="text-black text-2xl font-bold">1234 5678 9876 3214</h3>
                                </div>
                                <div className="absolute top-0 mr-[50px] right-0 flex items-center justify-center h-[540px] text-black">
                                    <h3 className="text-black font-bold">valid till : 01/25</h3>
                                </div>
                                <div className="absolute left-10 top-0 flex items-center justify-center h-[725px]  text-black">
                                    <h3 className="text-black font-bold">RAVI A PANKHANIYA</h3>
                                </div>
                                <div className="absolute right-12 top-0 flex items-center justify-center h-[705px]  text-black">
                                    <h3 className="text-black font-bold italic">mastercard</h3>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={atm} alt="" className="w-full h-[500px]" />
                                <div className="absolute top-0 left-10 flex items-center justify-center h-[275px] text-black">
                                    <h4 className="text-black font-bold">Credit Card</h4>
                                </div>
                                <div className="absolute top-0 right-10 flex items-center justify-center h-[275px] text-black">
                                    <h4 className="text-black font-bold">Bank of Baroda</h4>
                                    <img src={bob} alt="" className='h-[20px] ml-2' />
                                </div>
                                <div className="absolute top-0 left-20 ml-12 right-0 flex items-center justify-center h-[475px] text-black">
                                    <h3 className="text-black text-2xl font-bold">9856 1236 8745 9654</h3>
                                </div>
                                <div className="absolute top-0 mr-[50px] right-0 flex items-center justify-center h-[540px] text-black">
                                    <h3 className="text-black font-bold">valid till : 02/26</h3>
                                </div>
                                <div className="absolute left-10 top-0 flex items-center justify-center h-[725px]  text-black">
                                    <h3 className="text-black font-bold">RAVI A PANKHANIYA</h3>
                                </div>
                                <div className="absolute right-12 top-0 flex items-center justify-center h-[705px]  text-black">
                                    <h3 className="text-black font-bold italic">mastercard</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Account;
