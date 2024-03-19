import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import PieChart from '../components/PieChart'
import Datatable from '../components/Datatable'
import axios from 'axios'
import TransactionForm from '../components/TransactionForm'
import LineChart from '../components/LineChart'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import useAxiosPrivate from '../axios/axiosPrivate'
import { useAuth } from '../context/authContext'


type Props = {}

type Category = {
    category: string,
    totalAmount: number
}

const Dashboard = (props: Props) => {

    const axiosPrivate = useAxiosPrivate();

    const { auth } = useAuth()


    const [count, setCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [categoryData, setCategoryData] = useState<Category[]>([]);
    const [transactionData, setTransactionData] = useState<{ month: string; payment: number }[]>([]);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    

    const fetch = async () => {
        try {
            const response = await axiosPrivate.get('/transaction-payment');
            const data = response.data.newTransactionObject;
            // const sortedData = data.sort((a: { month: string }, b: { month: string }) => {
            //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //   return months.indexOf(a.month) - months.indexOf(b.month);
            // });
            setTransactionData(data);
            // console.log(transactionData);

        } catch (error) {
            console.error('Failed to fetch transaction data:', error);
        }
    }


    const fetchCategory = async () => {
        try {
            const response = await axiosPrivate.get('/categoryPayment');
            const data = response.data.formatData;
            // const sortedData = data.sort((a: { month: string }, b: { month: string }) => {
            //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //   return months.indexOf(a.month) - months.indexOf(b.month);
            // });
            setCategoryData(data);
        } catch (error) {
            console.error('Failed to fetch transaction data:', error);
        }
    }


    const toggleForm = (): void => {
        setShowForm(!showForm);
    };

    // fetch all the transaction






    useEffect(() => {
        const getAllTransaction = async () => {
            try {
                const data = await axiosPrivate.get(`/getAllTransaction`)
                const transactionData = data.data.getTransaction;
                const totalCount = transactionData?.length
                setCount(totalCount);
                setTotalAmount(data.data.totalPayment)
            } catch (error) {
                console.log(error);

            }
        }
        getAllTransaction()
    }, [transactionData]);



    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover'>
                <div className='flex flex-col lg:flex-row h-full'>
                        <div className='w-full lg:w-1/5 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10'>
                            <div className='mt-4 relative cursor-pointer'>
                                <button className='lg:hidden absolute top-2 right-4 text-xl focus:outline-none' onClick={toggleMenu}>
                                    {showMenu ? <CiMenuBurger /> : <IoIosCloseCircle />}
                                </button>
                                <div className=''>
                                    {!showMenu && <Menu />}
                                </div>

                            </div>
                        </div>

                    <div className='w-full lg:w-4/5 p-4 lg:p-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                            {/* First Line */}
                            <div className='w-full sm:w-72 h-36 border border-solid flex items-center justify-center shadow-panelShadow'>
                                <div className='text-center'>
                                    <h1 className='text-2xl text-[#FF6384] font-bold'>₹ 50000</h1>
                                    <h3>Total Income</h3>
                                </div>
                            </div>
                            <div className='w-full sm:w-72 h-36 border border-solid flex items-center justify-center shadow-panelShadow'>
                                <div className='text-center'>
                                    <h1 className='text-2xl text-[#6544f8] font-bold'>₹ {totalAmount}</h1>
                                    <h3>Total Expense</h3>
                                </div>
                            </div>
                            <div className='w-full sm:w-72 h-36 border border-solid flex items-center justify-center shadow-panelShadow'>
                                <div className='text-center'>
                                    <h1 className='text-2xl text-[#83b632] font-bold'>₹ {50000 - totalAmount}</h1>
                                    <h3>Total Balance</h3>
                                </div>
                            </div>
                            <div className='w-full sm:w-72 h-36 border border-solid flex items-center justify-center shadow-panelShadow'>
                                <div className='text-center'>
                                    <h1 className='text-2xl text-[#ff944d] font-bold'>{count}</h1>
                                    <h3>Total Transactions</h3>
                                </div>
                            </div>
                            <div className='absolute sm:top-0 right-4 lg:right-0 lg:relative  sm:mt-0 mt-[680px]'>
                                <button onClick={toggleForm} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                    Add Transaction
                                </button>
                            </div>

                            {/* Second Line */}
                            <div className='col-span-full mt-8 sm:col-span-2 lg:col-span-full'>
                                {/* Transaction Table */}
                                <div className='relative'>
                                    <Datatable />
                                    {showForm && (
                                        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-lg'>
                                            <TransactionForm />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Third Line */}
                            <div className='col-span-full mt-8 lg:col-span-full'>
                                {/* Line Chart */}
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='shadow-panelShadow bg-white p-3'>
                                        <PieChart categoryData={categoryData} fetchCategory={fetchCategory} />
                                    </div>
                                    <div className='mt-8 sm:mt-0 sm:ml-4 hidden sm:block'>
                                        <div className='lg:shadow-panelShadow bg-white p-3'>
                                            <LineChart fetch={fetch} transactionData={transactionData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Dashboard