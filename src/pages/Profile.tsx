import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import DataTable from 'react-data-table-component'
import { FaAmazonPay } from "react-icons/fa";
import { option } from 'yargs'
import SplitBillTable from '../components/SplitBillTable'

type Props = {}
type ValuePiece = Date | null;

type EmailType = {
    email: string;
};


type formValue = {
    name: string,
    date: Date,
    payment: string
}

type FormData = {
    name: string
    payment: string;
    date: string;
    category: string;
    description: string;
    mode: string,
    status: string,
    emails: string[];
};

type Category = {
    category: string
    budget_boundry: number
}

const Profile = (props: Props) => {

    const [category, setCategory] = useState<Category[]>([]);
    const [splitData, setSplitData] = useState<FormData[]>([]);

    const { register, handleSubmit, control } = useForm<FormData>();

    const form = useForm<formValue>();

    const onSubmit = async (data: FormData) => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/splitbill", data)
            if (res && res.data) {
                setSplitData(res.data.data)
                console.log(splitData)
            }
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        try {
            axios.get("http://localhost:5000/api/v1/getCategory").then((response) => {
                console.log(response.data.getCategory);
                setCategory(response.data.getCategory)

                // console.log(categories[0].category);

            }
            )
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover'>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative cursor-pointer">
                            {/* Menu Component */}
                            <Menu />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full lg:w-full p-4 lg:p-10 border border-solid rounded-lg shadow-panelShadow">
                    <div className="w-full lg:w-full p-4 lg:p-10">
                        <div className="border border-solid p-4 rounded-lg shadow-panelShadow">
                            <h2 className="text-lg font-semibold mb-4 text-center">Bill Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                                {/* First Column */}
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <label className="block mb-2 text-sm">Name</label>
                                        <input
                                            type="text"
                                            className="border border-gray-300 text-black rounded-md p-2 w-full text-sm"
                                            placeholder="Enter the amount"
                                            {...register('name')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm">Payment</label>
                                        <input
                                            type="number"
                                            className="border border-gray-300 text-black rounded-md p-2 w-full text-sm"
                                            placeholder="Enter the amount"
                                            {...register('payment')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm">Date</label>
                                        <input
                                            type="date"
                                            className="border border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('date')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm">Category</label>
                                        <select
                                            className="border text-black border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('category')}
                                        >
                                            <option> Select Your Category</option>
                                            {category.map((e) => (
                                                <option key={e.category} value={e.category} className='text-black'>{e.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Second Column */}
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <label className="block mb-1 text-sm">Description</label>
                                        <textarea
                                            className="border border-gray-300 rounded-md p-1 w-full text-sm block"
                                            rows={2}
                                            placeholder="Enter description..."
                                            {...register('description')}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm">Mode of Payment</label>
                                        <select
                                            className="border text-black border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('mode')}
                                        >
                                            <option> Select Your Category</option>
                                            <option value="online" className='text-black'>Online</option>
                                            <option value="offline" className='text-black'>Offline</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm">Transaction Status</label>
                                        <select
                                            className="border text-black border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('status')}
                                        >
                                            <option> Status</option>
                                            <option value="completed" className='text-black'>Completed</option>
                                            <option value="pending" className='text-black'>pending</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Enter Emails Section */}
                                <div className='col-span-2 text-center'>
                                    <label className="block text-gray-700 font-bold mb-2">Enter Emails to Send Request</label>
                                    <Controller
                                        name="emails"
                                        control={control}
                                        defaultValue={['']} // Initial value with an empty string
                                        render={({ field }) => (
                                            <>
                                                {field.value.map((instruction: string, index: number) => (
                                                    <div key={index} className="flex justify-center items-center">
                                                        <input
                                                            type="email"
                                                            {...field}
                                                            value={instruction}
                                                            onChange={(e) => {
                                                                const newInstructions = [...field.value];
                                                                newInstructions[index] = e.target.value;
                                                                field.onChange(newInstructions);
                                                            }}
                                                            className="border border-gray-300 rounded-md p-1 w-full text-sm mb-2 mr-2"
                                                            placeholder="example@gmail.com"
                                                        />
                                                        {index !== 0 && (
                                                            <button
                                                                type="button"
                                                                className="bg-red-500 text-white rounded p-2 text-sm"
                                                                onClick={() => {
                                                                    const newInstructions = [...field.value];
                                                                    newInstructions.splice(index, 1);
                                                                    field.onChange(newInstructions);
                                                                }}
                                                            >
                                                                Remove
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => field.onChange([...field.value, ''])} // Append a new empty string
                                                    className="bg-green-500 text-white rounded p-2 text-sm mt-2"
                                                >
                                                    Add Step
                                                </button>
                                            </>
                                        )}
                                    />
                                </div>
                                {/* Submit Button */}
                                <div className="col-span-2 text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm"
                                    >
                                        Send Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

               
                    {/* <div>
                        Split Bill Report
                    </div>
                    <SplitBillTable/> */}
                
            </section>


        </>
    )
}

export default Profile