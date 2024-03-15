import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import useAxiosPrivate from '../axios/axiosPrivate';
// import useAxiosPrivate from '../axios/axiosPrivate';

type Props = {
}

type formValue = {
    name : string,
    description : string,
    date : Date,
    category:string,
    payment : number,
    status : string,
    mode : string,
    emails : [string]
}



const columns = [
	{
		name: 'Name',
		selector: (row : any) => row.name,
	},
	{
		name: 'Description',
		selector: (row : any) => row.description,
	},
    {
		name: 'Date',
		selector: (row : any) => row.date,
	},
    {
		name: 'category',
		selector: (row : any) => row.category,
	},
    {
		name: 'payment',
		selector: (row : any) => row.payment,
	},
    {
		name: 'emails',
		selector: (row : any) => row.emails,
	},
];


const SplitBillTable = (props: Props) => {

    const axiosPrivate = useAxiosPrivate();

    const [data , setData] = useState<formValue[]>([]);

    const getAllSplitBill = async()=>{
        try {
            const res = await axiosPrivate.get("/getsplitbill")
            console.log("reach")
            if(res && res.data.success){
                console.log(res.data.data)
                setData(res.data.data)
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getAllSplitBill()
    },[])


	return (
        <div className=''>
<DataTable
        pagination
			columns={columns}
			data={data}
		/>
        </div>
		
	);
};



export default SplitBillTable