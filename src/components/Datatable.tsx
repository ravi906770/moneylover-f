import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import DataTable, { Direction } from 'react-data-table-component';
import { number } from 'yup';
import { dummy } from './Filter';
import ExportButton from './ExportButton';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
// import FilterComponent from './FilterComponent';

type Props = {}


// get the data from the backend



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






type ExpandedComponentProps = {
    data: {
        _id: number;
        name : string;
        description : string;
        date : string;
        category : string;
        payment : number;
        status: string;
        mode : string
    };
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




const ExpandedComponent: React.FC<ExpandedComponentProps> = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
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


// const columns  = [
//     {
//         name: 'Id',
//         selector: (row: any) => row._id,
//         sortable : true,
//         // style: {
//         //     // Adjust the width of the column here
//         //     maxWidth: '50px', // Set the maximum width of the column
//         //     minWidth: '10px' // Set the minimum width of the column
//         // },  
//     },
//     {
//         name: 'Name',
//         selector: (row: any) => row.name,
//         grow:1
//     },
//     {
//         name: 'Description',
//         selector: (row: any) => row.description,
//         grow:1
//     },
//     {
//         name: 'Date',
//         selector: (row: any) => row.date,
//         sortable : true,
//     },
//     {
//         name: 'Category',
//         selector: (row: any) => row.category,
//     },
//     {
//         name: 'Payment',
//         selector: (row: any) => row.payment,
//         sortable : true
//     },
//     {
//         name: 'Status',
//         selector: (row: any) => row.status, 
//     },
//     {
//         name: 'Mode',
//         selector: (row: any) => row.mode, 
//     },
//     {
//         name : "Actions",
//         cell: (row: any) => (
//             <>
           
//             <div className="  flex">
//                 <button className=" px-2 py-2  text-white rounded whitespace-nowrap" ><FaEdit  className='text-blue-500 text-[25px]'/></button>
//                 <button className="px-2 py-2  text-white rounded whitespace-nowrap" onClick={handleDelete}>
//                     <MdDelete className='text-red-500 text-[25px]'/>
//                 </button>
//             </div>
    
//             </>
//         ),
       
//         button: true,
       
//     }
    

// ];






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
        fontSize: '16px'         // Font weight of the table header
        // Add any other styles you want to apply to the table header
      },
    },
    cells: {
      style: {
        fontSize: '14px'  // Font size of column headers
        // Add any other styles you want to apply to the column headers
      },
    },
  };



const Datatable = (props: Props) => {


    function convertArrayOfObjectsToCSV(array: any[]): string {
        let result: string;
    
        const columnDelimiter = ',';
        const lineDelimiter = '\n';
        const keys = Object.keys(array[0]);
    
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
    
        array.forEach((item: { [key: string]: any }) => {
            let ctr = 0;
            keys.forEach((key: string) => {
                if (ctr > 0) result += columnDelimiter;
    
                result += item[key];
                
                ctr++;
            });
            result += lineDelimiter;
        });
    
        return result;
    }
    
    function downloadCSV(array: any[]) {
        const link = document.createElement('a');
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;
    
        const filename = 'export.csv';
    
        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }
    
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', filename);
        link.click();
    }
    
    

    const [data , setData] = useState<Movie[]>([]);

    const getallTransaction = () => {
        try {
          axios.get("http://localhost:5000/api/v1/getAllTransaction").then((response) => {
            // console.log(response.data.getTransaction);
            setData(response.data.getTransaction)
    
          }
          )
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getallTransaction();
      }, [])


    
      const handleDelete = async(_id: string)=>{
            try {
                await axios.delete(`http://localhost:5000/api/v1/delete-transaction/${_id}`)
                getallTransaction();
            } catch (error) {
                console.log(error)
            }
      }






   
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
            grow:1
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
                    <button className=" px-2 py-2  text-white rounded whitespace-nowrap" ><FaEdit  className='text-blue-500 text-[25px]'/></button>
                    <button className="px-2 py-2  text-white rounded whitespace-nowrap" onClick={() => handleDelete(row._id)}>
                        <MdDelete className='text-red-500 text-[25px]'/>
                    </button>
                </div>
        
                </>
            ),
           
            button: true,
           
        }
        
    
    ];


  return (
    <>
    <DataTable
    title="Expense Report"
               pagination
               columns={columns}
               data={filteredItems}
               selectableRows
               selectableRowsSingle
               subHeader
               customStyles={customStyles}
               subHeaderComponent={subHeaderComponentMemo}
               selectableRowsHighlight
                direction={Direction.AUTO}
               actions={actionsMemo}
             dense
             
              
		/>
    </>
  )
}

export default Datatable

