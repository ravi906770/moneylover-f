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
import { useFieldArray, useForm } from 'react-hook-form'
import DataTable from 'react-data-table-component'
import { FaAmazonPay } from "react-icons/fa";
import { option } from 'yargs'

type Props = {}
type ValuePiece = Date | null;

type formValue = {
    name: string,
    date: Date,
    payment: string
}

type FormData = {
    amount: string;
    date: string;
    category: string;
    description: string;
    bill: FileList;
    emails: { email: string }[];
};

type Category = {
    category : string
    budget_boundry:number
}

const Profile = (props: Props) => {

    const [category, setCategory] = useState<Category[]>([]);

    const { register, handleSubmit, control } = useForm<FormData>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'emails',
    });
    const form = useForm<formValue>();

    const onSubmit = (data: FormData) => {
        console.log(data);
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
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-1/2 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative cursor-pointer">
                            {/* Menu Component */}
                            <Menu />
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 p-4 lg:p-10">
                        <div className="border border-solid p-4 rounded-lg  shadow-panelShadow">
                            <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                                {/* First Column */}
                                <div className="col-span-1">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm">Amount</label>
                                        <input
                                            type="number"
                                            className="border border-gray-300 text-black rounded-md p-2 w-full text-sm"
                                            placeholder="Enter the amount"
                                            {...register('amount')}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm">Date</label>
                                        <input
                                            type="date"
                                            className="border border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('date')}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm">Category</label>
                                        <select
                                            className="border text-black border-gray-300 rounded-md p-2 w-full text-sm"
                                            {...register('category')}
                                        >
                                            <option> Select Your Category</option>
                                         {
                                            
                              category.map((e) =>
                                <>
                                
                                  <option value={e.category} className='text-black'>{e.category}</option>
                                </>
                              )
                            }
                                        </select>
                                    </div>
                                </div>
                                {/* Second Column */}
                                <div className="col-span-1">
                                    <div className="mb-4">
                                        <label className="block mb-1 text-sm">Description</label>
                                        <textarea
                                            className="border border-gray-300 rounded-md p-1 w-full text-sm block"
                                            rows={2}
                                            placeholder="Enter description..."
                                            {...register('description')}
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1 text-sm">Upload Bill</label>
                                        <input
                                            type="file"
                                            className="border border-gray-300 rounded-md p-1 w-full text-sm"
                                            {...register('bill')}
                                        />
                                    </div>
                                </div>
                                {/* Middle */}
                                <div className="col-span-2 text-center mb-4">
                                    <h2>Enter Emails to Send Request</h2>
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="flex justify-center items-center">
                                            <input
                                                type='email'
                                                {...register(`emails.${index}.email`)}
                                                defaultValue={field.email}
                                                className='border border-gray-300 rounded-md p-1 w-full text-sm mb-2 mr-2'
                                            />
                                            <button type="button" onClick={() => remove(index)} className='bg-red-500 text-white rounded p-2 text-sm'>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => append({ email: '' })}
                                        className='bg-green-500 text-white rounded p-2 text-sm mt-2'
                                    >
                                        Add Email
                                    </button>
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
            </section>


        </>
    )
}

export default Profile