import { Link } from 'react-router-dom';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import bg from "../assets/hero-bg.png";
// import heroImg01 from "../assets/hero-img05.avif";
import { Filters } from '../components/Filter';
import { dummy } from '../components/Filter';
import LineChart from '../components/LineChart';
import { FaFilter } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';
import { toast } from 'react-toastify';

type Props = {};


interface Category {
  _id:string,
  category: string;
  // other properties
}


interface Transaction {
  name: String;
  discription: String;
  date: String;
  category:String;
  payment : String;
  end_date : Date;
  status : String;
  mode : String
}




const Transaction = (props: Props) => {


  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [name , setName] = useState<string>('');
  const [discription , setDiscription] = useState<string>('');
  const [category , setCategory] = useState<string>('');
  const [date , setDate] = useState<string>('');
  const [end_date , setEnd_Date] = useState<string>('');
  const [payment , setPaymet] = useState<string>('');
  const [status , setStatus] =useState<string>('');
  const [mode , setMode] = useState<string>('');
  const [categories , setCategories] = useState<Category[]>([])
  // const [id, setId] = useState("");
  const [transaction , setTransaction] = useState<Transaction[]>([]);




  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
      try {
        axios.get("/api/v1/getCategory").then((response)=>{
          console.log(response.data.getCategory);
          setCategories(response.data.getCategory)

          // console.log(categories[0].category);
          
        }
        )
      } catch (error) {
        console.log(error)
      }
  },[])

  const handleTransaction =async (e: React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/transaction`, { name , discription,date,category,payment,end_date,status,mode})
      if (res && res.data.success) {
        // console.log(res)
        setName('');
        setDiscription('');
        setCategory('');
        setDate('');
        setEnd_Date('');
        setPaymet('');
        setStatus('');
        setMode('');
        setShowForm(false);
        setTransaction([...transaction, res.data.newTransaction]);
       
      }
    } catch (error) {
      console.log(error);
    }
  
}

useEffect(()=>{
  try {
    axios.get("/api/v1/getAllTransaction").then((response)=>{
      console.log(response.data.getTransaction);
      setTransaction(response.data.getTransaction)
      
    }
    )
  } catch (error) {
    console.log(error)
  }
},[])


const handleDelete = async (id: string) => {
  try {
    let answer = window.prompt("Are You Sure want to delete this transaction ? ");
    if (!answer) return;
    const { data } = await axios.delete(
      `/api/v1/delete-transaction/${id}`
    );
    toast.success("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
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

             <Menu/>

            </div>
          </div>

          <div className="flex-1 p-4 lg:p-10">
            <div className="relative ml-[860px]">
              <button onClick={toggleForm} className="bg-blue-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
                Add Transaction
              </button>
              {showForm && (
                <div className="absolute top-10 right-0 z-10 bg-white p-8 rounded-lg shadow-lg">
                  {/* Your form elements go here */}
                  <form className="space-y-1 w-[500px]" onSubmit={handleTransaction}>
                    {/* Example input field */}
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Name
                      </label>
                      <input
                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        type="text"
                        value={name}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscription(e.target.value)}
                        type="text"
                        value={discription}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                        type="date"
                        value={date}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select Category</option>
                        {categories.map((ele,id)=>{
                          return  <option key={id} value={ele.category}>{ele.category}</option>

                        })}
                        {/* 
                        <option value="category1">Food</option>
                        <option value="category2">Shopping</option>
                        <option value="category3">Travel</option> */}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Payment
                      </label>
                      <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymet(e.target.value)}
                        type="number"
                        value={payment}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        End-Date
                      </label>
                      <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnd_Date(e.target.value)}
                        type="date"
                        value={end_date}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={status}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Transaction Status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Mode
                      </label>
                      <select
                        id="category"
                        name="category"
                       value={mode}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMode(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Transaction Mode</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                    </div>
                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-green-400 text-white font-bold mt-10 py-2 px-4 rounded focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="p-4 justify-between items-center">
              <LineChart />
            </div>
            <div className="h-96  p-4 overflow-hidden">
              <div className='flex justify-between items-center '>
                <div> <h1 className="text-4xl text-headingColor">Transactions</h1>
                </div>
                <div className="relative inline-block text-left" >
                  <div className="flex items-center" onClick={toggleDropdown} >

                    <FaFilter className="w-full cursor-pointer" />
                  </div>
                  <div ref={dropdownRef} className={`absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y  rounded-md shadow-lg outline-none ${isOpen ? '' : 'hidden'} hover:visible`}>
                    <div className="py-1">
                      {Filters.map((e, index) => {
                        return <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{e.name}</a>
                      })}
                    </div>
                  </div>
                </div>  
              </div>

              <div className="max-h-80 mt-4 overflow-y-auto">
                <table className="table-auto w-full border-collapse border border-gray-800">
                  <thead>
                    <tr className="border-blue-400 text-primaryColor">
                      <th className="border border-blue-400 px-4 py-2">Id</th>
                      <th className="border border-blue-400 px-4 py-2">Name</th>
                      <th className="border border-blue-400 px-4 py-2">Description</th>
                      <th className="border border-blue-400 px-4 py-2">Date</th>
                      <th className="border border-blue-400 px-4 py-2">Category</th>
                      <th className="border border-blue-400 px-4 py-2">Payment</th>
                      <th className="border border-blue-400 px-4 py-2">End Date</th>
                      <th className="border border-blue-400 px-4 py-2">Status</th>
                      <th className="border border-blue-400 px-4 py-2">Mode</th>
                      <th className="border border-blue-400 px-4 py-2">Action</th>
                      <th className="border border-blue-400 px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.map((transaction,index) => ( 
                      <tr className="">
                        <td className="border border-blue-400 px-4 py-2">{index}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.name}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.discription}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.date as unknown as string}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.category}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.payment}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.end_date as unknown as string}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.status}</td>
                        <td className="border border-blue-400 px-4 py-2">{transaction.mode}</td>
                        <td className="border border-blue-400 px-4 py-2">
                          <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                            Update
                          </button>
                        </td>
                        <td className="border border-blue-400 px-4 py-2">
                          <button  className='bg-red-500 text-white px-4 py-2 rounded'>
                            Delete
                          </button>
                        </td>

                      </tr>
                   ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Transaction;
