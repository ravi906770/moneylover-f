import React, { useState } from 'react'
import Menu from '../components/Menu'
import bg from "../assets/hero-bg.png"
import PieChart from '../components/PieChart'
import Datepicker from 'react-tailwindcss-datepicker'
import Datatable from '../components/Datatable'
import FakeChart from '../components/FakeChart'
import FakeChart2 from '../components/FakeChart2'
import FakeChart3 from '../components/FakeChart3'

type Props = {}

const Dashboard = (props: Props) => {


    // const [count , setCount] = useState(0);





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
            <section className='flex items-center w-full min-h-screen bg-no-repeat bg-center bg-cover ' style={{ backgroundImage: `url(${bg})` }} >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-[20px] lg:w-1/4 bg-slack-50 lg:rounded-r-lg p-4 lg:p-10">
                        <div className="mt-4 relative">

                            <Menu />

                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-12" >
                        {/* First Line */}
                        <div className='w-[300px] h-[100px]  border border-solid    flex items-center justify-center'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#FF6384] font-bold'>₹ 50000</h1>
                                <h3>Total Income</h3>
                            </div>
                        </div>
                        <div className='w-[300px] h-[100px] border border-solid   flex items-center justify-center'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#6544f8] font-bold'>₹ 36500</h1>
                                <h3>Total Expense</h3>
                            </div>
                        </div>
                        <div className='w-[300px] h-[100px] border border-solid  flex items-center justify-center'>
                            <div className='items-center justify-between text-center '>
                                <h1 className='text-[25px] text-[#83b632] font-bold'>₹ 13500</h1>
                                <h3>Total Balance</h3>
                            </div>
                        </div>
                        <div className='w-[300px] h-[100px] border border-solid flex items-center justify-center'>
                            <div className='items-center justify-between text-center'>
                                <h1 className='text-[25px] text-[#ff944d] font-bold'>135</h1>
                                <h3>Total Transactions</h3>
                            </div>
                        </div>


                        {/* Second Line */}
                        <div className='col-span-4' >

                            {/* Transaction Table */}
                            <div className='  w-full'>
                                
                                    <Datatable />
                               
                            </div>
                        </div>

                        {/* Third Line */}
                        <div className='col-span-4'>
                            {/* Line Chart */}
                            <div className=' grid grid-cols-2'>
                                <div className='col-span-1 '>
                                    <FakeChart />
                                </div>
                                <div className="ml-4 col-span-1">
                                    <div className="w-full">
                                        <FakeChart2 />
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