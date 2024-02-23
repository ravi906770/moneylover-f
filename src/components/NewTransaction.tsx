import { useState } from 'react';

function NewTransaction(): JSX.Element {
    // State to manage the visibility of the form
    const [showForm, setShowForm] = useState<boolean>(false);

    // Function to toggle the visibility of the form
    const toggleForm = (): void => {
        setShowForm(!showForm);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Transaction Form</h2>
                       
                        <form className="space-y-4">
                          
                            <div>
                                <label htmlFor="transactionName" className="block text-sm font-medium text-gray-700">
                                    Transaction Name
                                </label>
                                <input
                                    type="text"
                                    id="transactionName"
                                    name="transactionName"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                           
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                     
                        <button
                            onClick={toggleForm}
                            className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewTransaction;
