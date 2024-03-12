import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import axios from 'axios';

type formValue = {
    name: string,
    date: Date,
    payment: string
}

type FormData = {
    name : string
    payment: string;
    date: string;
    category: string;
    description: string;
    mode : string,
    status : string,
    emails: {email:string}[];
};

type Category = {
    category : string
    budget_boundry:number
}

const Profile: React.FC = (props) => {
    const [category, setCategory] = useState<Category[]>([]);
    const [splitData, setSplitData] = useState<FormData[]>([]);
    const [emails, setEmails] = useState<string[]>(['']);

    useEffect(() => {
        try {
            axios.get("http://localhost:5000/api/v1/getCategory").then((response) => {
                console.log(response.data.getCategory);
                setCategory(response.data.getCategory);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...emails];
        values[index] = event.target.value;
        setEmails(values);
    };

    const handleAddInput = () => {
        setEmails([...emails, '']);
    };

    const handleRemoveInput = (index: number) => {
        const values = [...emails];
        values.splice(index, 1);
        setEmails(values);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/v1/splitbill", { emails });
            if (res && res.data) {
                setSplitData(res.data.data);
                console.log(splitData);
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                        <div className="border border-solid p-4 rounded-lg shadow-panelShadow">
                            <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                                {/* Form fields go here */}
                                <div className="col-span-2 text-center mb-4">
                                    <h2>Enter Emails to Send Request</h2>
                                    {emails.map((email, index) => (
                                        <div key={index} className="flex justify-center items-center">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(event) => handleInputChange(index, event)}
                                                className="border border-gray-300 rounded-md p-1 w-full text-sm mb-2 mr-2"
                                            />
                                            <button type="button" onClick={() => handleRemoveInput(index)} className="bg-red-500 text-white rounded p-2 text-sm">
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={handleAddInput} className="bg-green-500 text-white rounded p-2 text-sm mt-2">
                                        Add Email
                                    </button>
                                </div>
                                {/* Submit Button */}
                                <div className="col-span-2 text-center">
                                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm">
                                        Send Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
