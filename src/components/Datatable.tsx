import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import DataTable, { Direction } from 'react-data-table-component';
import { number } from 'yup';
import { dummy } from './Filter';
import ExportButton from './ExportButton';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";

import { MdOutlinePreview } from "react-icons/md";
import axios from 'axios';
import Model from './Model';
// import FilterComponent from './FilterComponent';

type Props = {
}

interface Category {
    _id: string,
    category: string;
    // other properties
  }


// filter type
interface FilterComponentProps {
    onFilter: (e: ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    filterText: string;
}

// filter 
const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, onClear, filterText }) => {
    return (
        <div>
            <input type="text" value={filterText} onChange={onFilter} className='w-full h-[25px] rounded border border-solid border-black p-2' placeholder='Search Your Expense' />
            <button onClick={onClear}>Clear</button>
        </div>
    );
};







type Movie = {
    _id: string;
    name : string;
    description : string;
    date : string;
    category : string;
    payment : number;
    status: string;
    mode : string
};

interface ExpandedComponentProps  {
    data: Movie
};

const ExpandedContent: React.FC<ExpandedComponentProps> = ({ data }) => (
    <div>
        {data && (
        <div>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
        <p>Date: {data.date}</p>
        <p>Category: {data.category}</p>
        <p>Payment: {data.payment}</p>
        <p>Status: {data.status}</p>
        <p>Mode: {data.mode}</p>
        </div>
        )
        }
    </div>
);



// download the report


interface ExportProps {
    onExport: (value: string) => void;
}

const Export: React.FC<ExportProps> = ({ onExport }) => (
    <ExportButton onExport={onExport}>
        Export
    </ExportButton>
);






const customStyles = {
    // table: {
    //     style: {
    //       backgroundColor: 'rgba(255, 255, 255, 0)', // Change the background color of the table to transparent with 50% opacity
    //     },
    //   },
    head: {
      style: {
        backgroundColor: 'blue', // Background color of the table header
        color: 'blue',           // Text color of the table header
        fontWeight: 'bold',
        fontSize: '14px'         // Font weight of the table header
        // Add any other styles you want to apply to the table header
      },
    },
    cells: {
      style: {
        fontSize: '13px'  // Font size of column headers
        // Add any other styles you want to apply to the column headers
      },
    },
  };



const Datatable = (props: Props) => {

    const [expandedRow, setExpandedRow] = useState<Movie | null>(null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [data , setData] = useState<Movie[]>([]);
    const [categories, setCategories] = useState<Category[]>([])



    const [updatedData, setUpdatedData] = useState<Movie>({
        _id: '',
        name: '',
        description: '',
        date: '',
        category: '',
        payment: 0,
        status: '',
        mode: ''
    });

    const params = useParams();

    const handleOpenUpdateForm = (_id: string) => {
        setUpdatedData({
            ...data.find(movie => movie._id === _id)!
        });
        // console.log(updatedData);
        
        setShowUpdateForm(true);
    };


    const getAllTransaction = async()=>{
        try {
            const data = await axios.get("http://localhost:5000/api/v1/getAllTransaction")
            const transactionData = data.data.getTransaction;
            setData(transactionData)
        } catch (error) {
            console.log(error);
            
        }
    }






    function convertArrayOfObjectsToCSV(array: any[]): string {
      let result: string = '';
  
      if (!Array.isArray(array) || array.length === 0) {
          console.error('Invalid array provided for CSV conversion.');
          return result;
      }
  
      const columnDelimiter = ',';
      const lineDelimiter = '\n';
      const keys = Object.keys(array[0]);
  
      result += keys.join(columnDelimiter);
      result += lineDelimiter;
  
      array.forEach((item: { [key: string]: any }) => {
          let ctr = 0;
          keys.forEach((key: string) => {
              if (ctr > 0) result += columnDelimiter;
  
              // Handle potential null or undefined values
              const value = item[key] !== undefined && item[key] !== null ? item[key] : '';
              result += value;
  
              ctr++;
          });
          result += lineDelimiter;
      });
  
      return result;
  }
  
  function downloadCSV(array: any[]): void {
      if (!Array.isArray(array) || array.length === 0) {
          console.error('Invalid array provided for CSV download.');
          return;
      }
  
      const link = document.createElement('a');
      let csv = convertArrayOfObjectsToCSV(array);
      if (!csv) {
          console.error('Failed to generate CSV.');
          return;
      }
  
      const filename = 'export.csv';
  
      if (!csv.match(/^data:text\/csv/i)) {
          csv = `data:text/csv;charset=utf-8,${csv}`;
      }
  
      link.setAttribute('href', encodeURI(csv));
      link.setAttribute('download', filename);
      link.click();
  }
  
  
    

    const getAllCategory = ()=>{
        try {
            axios.get("http://localhost:5000/api/v1/getCategory").then((response) => {
            //   console.log(response.data.getCategory);
              setCategories(response.data.getCategory)
      
              // console.log(categories[0].category);
      
            }
            )
          } catch (error) {
            console.log(error)
          }
    }

    
      useEffect(() => {
        getAllTransaction()
        setData(data)
        getAllCategory()
      }, [])


    
      const handleDelete = async(_id: string)=>{
            try {
                await axios.delete(`http://localhost:5000/api/v1/delete-transaction/${_id}`)
                getAllTransaction();
            } catch (error) {
                console.log(error)
            }
      }


    //   const handleupdate = async (_id : string , e: React.FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault()
    //     try {
    //         await axios.put(`http://localhost:5000/api/v1/updateTransaction/${_id}` , updatedData)
    //         getAllTransaction();
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     setShowUpdateForm(false);
    //   }

      const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };








   
    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data as any)} />, []);


    const [filterText, setFilterText] = useState<string>('');

    // filter the data
    const filteredItems = data?.filter(
		item => item.description && item.description.toLowerCase().includes(filterText.toLowerCase()),
	);
    

        // filter the data
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        return (
            <FilterComponent
                onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText]);


    
    const columns  = [
        {
            name: 'Id',
            selector: (row: any) => row._id,
            sortable : true,
            // style: {
            //     // Adjust the width of the column here
            //     maxWidth: '50px', // Set the maximum width of the column
            //     minWidth: '10px' // Set the minimum width of the column
            // },  
        },
        {
            name: 'Name',
            selector: (row: any) => row.name,
            grow:1
        },
        {
            name: 'Description',
            selector: (row: any) => row.description,
             // style: {
            //     // Adjust the width of the column here
            //     maxWidth: '50px', // Set the maximum width of the column
            //     minWidth: '10px' // Set the minimum width of the column
            // },  
        },
        {
            name: 'Date',
            selector: (row: any) => row.date,
            sortable : true,
        },
        {
            name: 'Category',
            selector: (row: any) => row.category,
        },
        {
            name: 'Payment',
            selector: (row: any) => row.payment,
            sortable : true
        },
        {
            name: 'Status',
            selector: (row: any) => row.status, 
        },
        {
            name: 'Mode',
            selector: (row: any) => row.mode, 
        },
        {
            name : "Actions",
            cell: (row: any) => (
                <>
               
                <div className="  flex">
                {/* <button className="px-2 py-2  text-white rounded whitespace-nowrap" >
                        <MdOutlinePreview className='text-green-500 text-[25px]' onClick={() => handleExpandRow(row)}/>
                    </button> */}
                    <button className=" px-2 py-2  text-white rounded whitespace-nowrap" onClick={() => handleOpenUpdateForm(row._id)} ><FaEdit  className='text-blue-500 text-[25px]'/></button>
                    <button className="px-2 py-2  text-white rounded whitespace-nowrap" onClick={() => handleDelete(row._id)}>
                        <MdDelete className='text-red-500 text-[25px]'/>
                    </button>
                </div>
        
                </>
            ),   
            button: true    
        }
    ];




  return (
    <>
  <DataTable
            title="Expense Report"
            pagination
            columns={columns}
            data={data}
            // selectableRows
            // selectableRowsSingle
            subHeaderComponent = {subHeaderComponentMemo}
            customStyles={customStyles}
            subHeader
            expandableRows
            expandableRowsComponent={ExpandedContent}
            selectableRowsHighlight
            direction={Direction.AUTO}
            actions={actionsMemo}
            dense
        />
             {showUpdateForm && (
                <div className="absolute top-10 right-0 z-10 bg-white p-8 rounded-lg shadow-lg">
                    <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-[25px]"
            onClick={() => setShowUpdateForm(false)}
        ><IoCloseCircle/></button>
                  {/* Your form elements go here */}
                  <form className="space-y-1 w-[500px]"   noValidate>
                    {/* Example input field */}
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Name
                      </label>
                      <input
                      name='name'
                      onChange={handleInputChange}
                      value={updatedData.name}
                        type="text"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                       name='description'
                       onChange={handleInputChange}
                      type='text'
                      value={updatedData.description}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                       onChange={handleInputChange}
                        type="date"
                        name='date'
                        value={updatedData.date}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="category"
                        // value={category}
                        // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option >Select Category</option>
                        {categories.map((ele, id) => {
                          return <option key={id} value={ele.category}>{ele.category}</option>

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
                       name='payment'
                       value={updatedData.payment}
                       onChange={handleInputChange}
                        type="number"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                        Transaction Mode
                      </label>
                      <select
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
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              )}
    </>
  )
}

export default Datatable

