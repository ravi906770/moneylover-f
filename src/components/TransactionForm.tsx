import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

type Props = {}

interface Category {
    _id: string,
    category: string;
    // other properties
  }

interface Transaction {
    _id: string;
    name: string;
    description: string;
    date: string;
    category: string;
    payment: string;
    end_date: string;
    status: string;
    mode: string
  }

type formValue = {
    name : string,
    description : string,
    date : Date,
    category:string,
    payment : number,
    end_date : string,
    status : string,
    mode : string
}

const TransactionForm = (props: Props) => {

    const [showForm, setShowForm] = useState<boolean>(false);
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    const [categories, setCategories] = useState<Category[]>([])

    const form = useForm<formValue>({})

    const {register , handleSubmit ,setValue, formState} = form;
  
    const {errors} = formState


    
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/v1/getCategory").then((response) => {
        console.log(response.data.getCategory);
        setCategories(response.data.getCategory)

        // console.log(categories[0].category);

      }
      )
    } catch (error) {
      console.log(error)
    }
  }, [])

    const onSubmit = async ( data : formValue) => {
        try {
          const res = await axios.post(`http://localhost:5000/api/v1/transaction`,data )
          if (res && res.data.success) {
            setShowForm(false);
            setTransaction([res.data.newTransaction, ...transaction]);
            // fetch()
            // fetchCategory()
            setValue('name',"")
            setValue('category',"")
            setValue('date',new Date())
            setValue('description',"")
            setValue('end_date','')
            setValue('mode',"")
            setValue('payment',0)
            setValue('status',"")
            
          }
        } catch (error) {
          console.log(error);
        }
    
      }

    //   const fetch = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:5000/api/v1/transaction-payment');
    //       const data = response.data.newTransactionObject;
    //       setTransactionData(data);
    //     } catch (error) {
    //       console.error('Failed to fetch transaction data:', error);
    //     }
    //   }


      const getallTransaction = () => {
        try {
          axios.get("http://localhost:5000/api/v1/getAllTransaction").then((response) => {
            // console.log(response.data.getTransaction);
            setTransaction(response.data.getTransaction)
    
          }
          )
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getallTransaction();
      }, [])
    
  

  return (
    <>
                <div className="absolute top-10 right-0 z-10 bg-white p-8 rounded-lg shadow-lg">
                  {/* Your form elements go here */}
                  <form className="space-y-1 w-[500px]" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Example input field */}
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("name",{
                          required :{
                            value  : true,
                            message : "Name is required!!"
                          }
                        })}
                      />
                    </div>
                    <p className='text-red-700'>{errors.name?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                      type='text'
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("description",{
                          required :{
                            value  : true,
                            message : "Description is required!!"
                          }
                        })}
                      />
                    </div>
                    <p className='text-red-700'>{errors.description?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("date",{
                          required :{
                            value  : true,
                            message : "Date is required!!"
                          }
                        })}
                      />
                    </div>
                    <p className='text-red-700'>{errors.date?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="category"
                        // value={category}
                        // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("category",{
                          required :{
                            value  : true,
                            message : "Atleast One category is required!!"
                          }
                        })}
                      >
                        <option value="">Select Category</option>
                        {categories.map((ele, id) => {
                          return <option key={id} value={ele.category}>{ele.category}</option>

                        })}
                        {/* 
                        <option value="category1">Food</option>
                        <option value="category2">Shopping</option>
                        <option value="category3">Travel</option> */}
                      </select>
                    </div>
                    <p className='text-red-700'>{errors.category?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Payment
                      </label>
                      <input
                        type="number"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"

                        {...register("payment",{
                          required :{
                            value  : true,
                            message : "Payment is required"
                          },
                          min : {
                            value : 0,
                            message : " value must be greater than 0"
                          }
                        })}
                      />
                    </div>
                    <p className='text-red-700'>{errors.payment?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        End-Date
                      </label>
                      <input
                        type="date"
                       
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("end_date",{
                          required :{
                            value  : true,
                            message : "End-date is required"
                          }
                        })}
                      />
                    </div>
                    <p className='text-red-700'>{errors.end_date?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"

                        {...register("status",{
                          required :{
                            value  : true,
                            message : "Status is required"
                          }
                        })}
                      >
                        <option value="">Transaction Status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                    <p className='text-red-700'>{errors.status?.message}</p>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Mode
                      </label>
                      <select
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        {...register("mode",{
                          required :{
                            value  : true,
                            message : "Mode is required"
                          }
                        })}
                      >
                        <option value="">Transaction Mode</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                    </div>
                    <p className='text-red-700'>{errors.mode?.message}</p>
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
    </>
  )
}

export default TransactionForm