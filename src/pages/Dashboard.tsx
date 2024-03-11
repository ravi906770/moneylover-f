import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import bg from "../assets/hero-bg.png"
import PieChart from '../components/PieChart'
import Datepicker from 'react-tailwindcss-datepicker'
import Datatable from '../components/Datatable'
import axios from 'axios'
import TransactionForm from '../components/TransactionForm'
import LineChart from '../components/LineChart'
// import BarChart from '../components/BarChart'

type Props = {}

type Category = {
    category: string,
    totalAmount: number
}

type Movie = {
    _id: string;
    name: string;
    description: string;
    date: string;
    category: string;
    payment: number;
    status: string;
    mode: string
};

const Dashboard = (props: Props) => {


    const [count, setCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [categoryData, setCategoryData] = useState<Category[]>([]);
    const [transactionData, setTransactionData] = useState<{ month: string; payment: number }[]>([]);

    const fetch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/transaction-payment');
            const data = response.data.newTransactionObject;
            // const sortedData = data.sort((a: { month: string }, b: { month: string }) => {
            //   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //   return months.indexOf(a.month) - months.indexOf(b.month);
            // });
            setTransactionData(data);
        } catch (error) {
            console.error('Failed to fetch transaction data:', error);
        }
    }


    const fetchCategory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/categoryPayment');
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


    const getAllTransaction = async () => {
        try {
            const data = await axios.get("http://localhost:5000/api/v1/getAllTransaction")
            const transactionData = data.data.getTransaction;
            const totalCount = transactionData.length
            setCount(totalCount);
            setTotalAmount(data.data.totalPayment)
        } catch (error) {
            console.log(error);

        }
    }



    useEffect(() => {
        getAllTransaction();
    }, [count, totalAmount]);






    const [val, setVal] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setVal(newValue);
    };

    return (
        <>
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover '  >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-[20px] lg:w-1/4 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative">

                            <Menu />

                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-12" >
                        {/* First Line */}
                        <div className='w-[250px] h-[100px]  border border-solid    flex items-center justify-center shadow-panelShadow'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#FF6384]  font-bold'>₹ 50000</h1>
                                <h3>Total Income</h3>
                            </div>
                        </div>
                        <div className='w-[250px] h-[100px] border border-solid   flex items-center justify-center shadow-panelShadow'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#6544f8] font-bold'>₹ {totalAmount}</h1>
                                <h3>Total Expense</h3>
                            </div>
                        </div>
                        <div className='w-[250px] h-[100px] border border-solid  flex items-center justify-center shadow-panelShadow'>
                            <div className='items-center justify-between text-center '>
                                <h1 className='text-[25px] text-[#83b632] font-bold'>₹ {50000 - totalAmount}</h1>
                                <h3>Total Balance</h3>
                            </div>
                        </div>
                        <div className='w-[250px] h-[100px] border border-solid flex items-center justify-center shadow-panelShadow'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#ff944d] font-bold'>{count}</h1>
                                <h3>Total Transactions</h3>
                            </div>
                        </div>
                        <div className='absolute right-0 mt-[120px]'>
                                    <button onClick={toggleForm} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add Transaction
                                    </button>
                                </div>


                        {/* Second Line */}
                        <div className='col-span-4 relative mt-10' >

                            {/* Transaction Table */}
                            <div className='  w-full overflow-hidden shadow-panelShadow'>
                                <div className=''>
                                    <Datatable />
                                </div>
                                


                                {showForm && <TransactionForm />}

                            </div>
                           
                        </div>

                        {/* Third Line */}
                        <div className='col-span-4'>
                            {/* Line Chart */}
                            <div className=' grid grid-cols-2'>
                                <div className='col-span-1 shadow-panelShadow bg-white p-3'>
                                    <PieChart categoryData={categoryData} fetchCategory={fetchCategory} />
                                </div>
                                <div className="ml-4 col-span-1">
                                    <div className="w-full shadow-panelShadow bg-white p-3">
                                        <LineChart fetch={fetch} transactionData={transactionData} />
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