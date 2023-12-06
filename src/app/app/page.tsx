"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";

const Card = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-2xl h-full max-h-[50vh] bg-black bg-opacity-60 border border-gray-400 rounded-lg shadow-xl shadow-gray-700 transition-all duration-300 hover:shadow-2xl my-8">
    {children}
  </div>
);

const Page = () => {
  const [tokenDetails, setTokenDetails] = useState({
    name: '',
    symbol: '',
    supply: '',
    owner: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTokenDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDeploy = (event) => {
    event.preventDefault();
    console.log("Deploying token with details:", tokenDetails);
    // Add deploy logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-black p-4 pt-[10vh]">
        <Card>
          <form onSubmit={handleDeploy} className="w-full space-y-4 p-4">
            <div className="text-white text-2xl font-bold mb-4">Deploy New Token</div>
            {['name', 'symbol', 'supply', 'owner'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-300">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input 
                  type={field === 'supply' ? 'number' : 'text'}
                  id={field}
                  name={field}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-200 text-black p-2"
                  onChange={handleInputChange} 
                />
              </div>
            ))}
            <button type="submit" className="w-full bg-gray-200 text-black font-bold py-2 px-4 rounded hover:bg-gray-300 transition-all duration-300">
              Deploy
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Page;
