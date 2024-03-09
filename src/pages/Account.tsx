import React, { useState } from 'react'
import Menu from '../components/Menu'
import bg from "../assets/hero-bg.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Datatable from '../components/Datatable'
import { Circle, Line } from 'rc-progress';
import atm from "../assets/bank3.jpg"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker'
import { CiBookmarkPlus } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import mastercard from "../assets/mastercard.svg"
import { CiCircleChevDown } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import Duetable from '../components/DueTable'
import AddDueForm from '../components/AddDueForm'
import FakeChart3 from '../components/FakeChart3'

type Props = {}
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Account = (props: Props) => {
    const [showForm, setShowForm] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen); // Toggle the state to open/close the form
    };

    const handleIconClick = () => {
        setShowForm(!showForm);
    };
    const handleClose = () => {
        setShowForm(!showForm)
    }

    const handleFormClose = () => {
        setIsFormOpen(!isFormOpen)
    }

    const [value, onChange] = useState<Value>(new Date());
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover' >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-[20px] lg:w-1/4 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative">
                            <Menu />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 mt-5">
                        {/* First Line */}
                        <div className='flex gap-10 flex-1'>
                            <div className='w-full h-[500px] relative'>
                                <h1 className='text-start text-[25px]'>Category Expense</h1>
                                <div className='m-5 p-2 flex flex-col gap-2'>
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" onClick={handleIconClick} />
                                        <h1>Travel</h1>
                                    </div>
                                    <Line percent={10} strokeWidth={3} strokeColor="#007bff" />
                                    {showForm && (
                                        <div className="bg-gray-100 p-4 absolute rounded mt-4">
                                            {/* Form for adding budget limit */}
                                            {/* Add your form elements here */}
                                            <IoCloseCircleOutline className='absolute right-0 top-0 text-[25px]' onClick={handleClose} />
                                            <label className='m-1'>Enter Your Budget Limit</label>
                                            <input type="number" placeholder="Enter budget limit" className="w-full border  rounded px-2 py-1 mt-2" />
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2">Submit</button>
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Food</h1>
                                    </div>
                                    <Line percent={30} strokeWidth={3} strokeColor="#28a745" />
                                    {showForm && (
                                        <div className="bg-gray-100 p-4 absolute rounded mt-4">
                                            {/* Form for adding budget limit */}
                                            {/* Add your form elements here */}
                                            <IoCloseCircleOutline className='absolute right-0 top-0 text-[25px]' onClick={handleClose} />
                                            <label className='m-1'>Enter Your Budget Limit</label>
                                            <input type="number" placeholder="Enter budget limit" className="w-full border  rounded px-2 py-1 mt-2" />
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2">Submit</button>
                                        </div>
                                    )}
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Hospital</h1>
                                    </div>
                                    <Line percent={40} strokeWidth={3} strokeColor="#dc3545" />
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Shopping</h1>
                                    </div>
                                    <Line percent={50} strokeWidth={3} strokeColor="#6f42c1" />
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Education</h1>
                                    </div>
                                    <Line percent={60} strokeWidth={3} strokeColor="#fd7e14" />
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Rent</h1>
                                    </div>
                                    <Line percent={70} strokeWidth={3} strokeColor="#17a2b8" />
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Fuel</h1>
                                    </div>
                                    <Line percent={80} strokeWidth={3} strokeColor="#e83e8c" />
                                    <div className="flex items-center">
                                        <CiBookmarkPlus className="text-green-500 mr-2 text-[25px]" />
                                        <h1>Misc</h1>
                                    </div>
                                    <Line percent={90} strokeWidth={3} strokeColor="#dc3545" />
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-10 flex-1'>
                            <div className='w-full h-[500px]'>
                                <h1 className='text-start text-[25px]'>Balance Review</h1>
                                <div className='mt-4 text-black border border-primaryColor rounded'>
                                    <Datepicker value={null} onChange={function (value: DateValueType, e?: HTMLInputElement | null | undefined): void {
                                        throw new Error('Function not implemented.')
                                    }} />
                                </div>
                                <div className='flex gap-6'>
                                    <div className="relative inline-block mt-4">
                                        <h4>Weekly Review</h4>
                                        <Circle percent={20} strokeWidth={5} strokeColor="#28a745" className='w-[125px]' />
                                        <span className="absolute inset-0 flex items-center justify-center">Total Usage</span>
                                    </div>
                                    <div className="relative inline-block mt-4">
                                        <h4>Monthly Review</h4>
                                        <Circle percent={10} strokeWidth={5} strokeColor="#e83e8c" className='w-[125px]' />
                                        <span className="absolute inset-0 flex items-center justify-center ">Total Usage</span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-6'>
                                    <div className="relative inline-block mt-4">
                                        <h4>Daily Budget Limit</h4>
                                        <Line percent={30} strokeWidth={3} strokeColor="#4CAF50" />
                                    </div>
                                    <div className="relative inline-block mt-4">
                                        <h4>Weekly Budget Limit</h4>
                                        <Line percent={20} strokeWidth={3} strokeColor="#F9A825" />
                                    </div>
                                    <div className="relative inline-block mt-4">
                                        <h4>Monthly Budget Limit</h4>
                                        <Line percent={10} strokeWidth={3} strokeColor="#3A86FF" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex gap-10 flex-1'>
                            <div className='w-full max-w-[600px] h-auto'>
                                <h1 className='text-start text-[25px]'>Bank Details</h1>
                                <div>
                                    <img src={atm} alt="" className='w-full h-[250px]' />
                                </div>
                                <div className="mt-4">
                                    <div className='flex gap-1 justify-start'>
                                        <AiFillBank className='text-[25px]' />
                                        <h2 className="text-lg font-semibold text-textColor">State Bank of India</h2>
                                    </div>
                                    <p className='text-[15px] text-textColor'>Account Holder Name: <span className='text-primaryColor font-semibold'>Ravi Pankhaniya</span></p>
                                    <div className='h-[50px] border border-solid border-primaryColor flex rounded-full'>
                                        <div className='border border-left border-primaryColor w-[80px] rounded-full'>
                                            <figure>
                                                <img src={mastercard} alt="" className='w-[50px] ml-3' />
                                            </figure>
                                        </div>
                                        <div className='flex flex-col justify-center items-center ml-[5px]'>
                                            <h5 className='text-textColor text-[12px] '>Card Number</h5>
                                            <h1 className='text-headingColor text-[15px]'>1234  5678  9101  1121</h1>
                                        </div>
                                        <div className='flex justify-end right-0 w-[90px] mt-3 text-[25px]'>
                                            <CiCircleChevDown className='text-primaryColor' />
                                        </div>
                                    </div>
                                    <div className='h-[40px] border boder-solid mt-2 flex rounded-full border-primaryColor '>
                                        <div className='border rounded-full w-[250px]'>
                                            <input type="number" placeholder="Quick Transfer" className='border text-headingColor hover:bg-none justify-center rounded-full h-full w-[250px]  text-center' />
                                        </div>
                                        <div className='border border-left w-[2px] rounded-full'></div>
                                        <div className='flex justify-center w-[80px] mt-2 text-[25px]'>
                                            <LuSend className='text-primaryColor' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Line */}
                        <div className='col-span-3'>
                            <div className='grid grid-cols-3 gap-5'>
                                <div className='col-span-1 w-full border border-solid relative'>
                                    <div className='flex h-[50px] p-1'>
                                        <h1 className='text-start text-[25px] '>My Dues</h1>
                                        <button onClick={toggleForm} className='ml-auto bg-blue-500 mt-1 mr-2 hover:bg-green-300 text-white font-bold py-2 px-4 rounded'>
                                            Add Dues
                                        </button>
                                    </div>
                                    {isFormOpen && (
                                        <div className="bg-gray-100 p-4 absolute rounded mt-4 right-0 top-0 z-50 ">
                                            <IoCloseCircleOutline className='absolute top-0 right-0 text-[25px] cursor-pointer' onClick={handleFormClose} />
                                            <form>
                                                <label className='m-1'>Add Bill Name</label>
                                                <input type="text" placeholder="Enter Bill Name" className="w-full border rounded px-2 py-1 mt-2" />
                                                <label className='m-1'>Add Due Date</label>
                                                <input type="date" placeholder="Enter Due Date" className="w-full border rounded px-2 py-1 mt-2" />
                                                <label className='m-1'>Add Payment</label>
                                                <input type="number" placeholder="Enter Due Payment" className="w-full border rounded px-2 py-1 mt-2" />
                                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-300 font-bold">Submit</button>
                                            </form>
                                        </div>
                                    )}
                                    <Duetable /> {/* Render your Duetable component here */}
                                </div>
                                <div className=" col-span-2 w-full border border-solid">
                                    <div className="w-full">
                                        <h1 className='text-start text-[25px]'>My Investment</h1>
                                        <FakeChart3/>
                                    </div>
                                </div>
                                {/* <div className=" col-span-1 w-full border border-solid">
                                    <div className="w-full">
                                        <h1>Stokes</h1>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                        {/* Third Line */}
                        {/* <div className='col-span-4'>
                            <div className=' grid grid-cols-2'>
                                <div className='col-span-1 w-full border border-solid'>
                                    <h1>Upcoming Dues</h1>
                                </div>
                                <div className="ml-4 col-span-1 w-full border border-solid">
                                    <div className="w-full">
                                        <h1>Stokes</h1>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Account