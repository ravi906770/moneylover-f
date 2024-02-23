import { Link } from 'react-router-dom';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import bg from "../assets/hero-bg.png";
// import heroImg01 from "../assets/hero-img05.avif";
import { Filters } from '../components/Filter';
import { Categories } from '../components/Filter';
import { dummy } from '../components/Filter';
import LineChart from '../components/LineChart'
import { FaFilter } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Menu from '../components/Menu';
import axios from 'axios';
import toast from 'react-hot-toast';

type Props = {};

const Category = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  // const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [category , setCategory] = useState<string>('');
  const [budget_boundry , setBudget_Boundry] = useState<string>('');

  



  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleCategory =async (e: React.FormEvent<HTMLFormElement>)=>{

      e.preventDefault();
      try {
        const res = await axios.post(`/api/v1/category`, { category , budget_boundry })
        if (res && res.data.success) {
          console.log(res)
        }
        else {
          toast.error(res && res.data.message)
        }
      } catch (error) {
        console.log(error);
      }
    
  }


  
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
            <div className="relative ml-[900px]">
              <button onClick={toggleForm} className="bg-blue-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">
                Add Category
              </button>
              {showForm && (
                <div className="absolute top-10 right-0 z-10 bg-white p-8 rounded-lg shadow-lg">
                  {/* Your form elements go here */}
                  <form className="space-y-4 w-[500px]" onSubmit={handleCategory}>
                    {/* Example input field */}
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                      >
                        <option value="">Select Category</option>
                        {Categories.map((e,index)=>{
                          return  <option value={e.category} key={e._id}>{e.category}</option>
                        })}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Monthly Budget Limit
                      </label>
                      <input
                        type="number"
                        id="transactionName"
                        name="transactionName"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget_Boundry(e.target.value)}
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
            <div className=" flex justify-around">
              <PieChart />
              <BarChart />
            </div>

            <div className="h-96  p-4 overflow-hidden">
              <div className='flex justify-between items-center '>
                <div> <h1 className="text-4xl text-textColor">Categories</h1>
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

                <div className='flex justify-evenly'>
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={66}
                    text='Food'
                    styles={buildStyles({
                     
                      pathColor: `green`, 
                      textColor: 'green', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px', 
                    })}
                  />
                </div>

                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={20}
                    text='Hospital'
                    styles={buildStyles({
                      // Customize the root path, trail, and path color
                      pathColor: `red`, // This is the color of the progress bar itself
                      textColor: 'red', // This is the color of the text (percentage)
                      trailColor: '#d6d6d6', // This is the color of the trail behind the progress bar
                      textSize: '16px', // Adjust the font size of the text (percentage)
                    })}
                  />
                </div>

                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={80}
                    text='Shopping'
                    styles={buildStyles({
                    
                      pathColor: `blue`, 
                      textColor: 'blue', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px',
                    })}
                  />
                </div>


                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={50}
                    text='Fule'
                    styles={buildStyles({
                      
                      pathColor: `orange`, 
                      textColor: 'orange', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px', 
                    })}
                  />
                </div>

                </div>

                <div className='flex mt-10 justify-evenly'>
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={56}
                    text='Education'
                    styles={buildStyles({
                    
                      pathColor: `purple`, 
                      textColor: 'purple', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px',
                    })}
                  />
                </div>

                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={25}
                    text='Travel'
                    styles={buildStyles({
                     
                      pathColor: `#20B2AA`, 
                      textColor: '#20B2AA', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px', 
                    })}
                  />
                </div>

                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={36}
                    text='Rent'
                    styles={buildStyles({
                    
                      pathColor: `brown`, 
                      textColor: 'brown', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px', 
                    })}
                  />
                </div>


                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={5}
                    text='Misc'
                    styles={buildStyles({
                      pathColor: `black`, 
                      textColor: 'black', 
                      trailColor: '#d6d6d6', 
                      textSize: '16px', 
                    })}
                  />
                </div>

                </div>
               
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
