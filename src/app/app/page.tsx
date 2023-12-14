"use client"

import React, { useState, useMemo } from 'react';
// Assume Navbar is a component you have already created
import Navbar from "@/components/Navbar";
import { useContractWrite, useAccount, useContract, useWaitForTransaction } from "@starknet-react/core";
import {factoryAddress, factoryABI} from "../../abis/factory";
const App = () => {
  const {  address } = useAccount();
  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '',
    owner: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Deploying token with details:', formData);
    writeAsync()
  };

	const { contract } = useContract({
		abi: factoryABI,
		address: factoryAddress,
	});

	const calls = useMemo(() => {
		if (!address || !contract) return [];
		return contract.populateTransaction["create_token"]!(formData.name ,formData.symbol, { low: parseInt(formData.supply), high: 0 }, formData.owner);
	}, [contract, address]);

  const { writeAsync, data, isPending } = useContractWrite({calls});

  const { isLoading, isError, error, data: tx} = useWaitForTransaction({hash: data?.transaction_hash, watch: true})

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-full max-w-2xl p-8 rounded-lg bg-white shadow-lg shadow-orange-500">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Deploy a new token 🪙</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'symbol', 'supply', 'owner'].map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-2 font-semibold text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === 'supply' ? 'number' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            ))}
            <button type="submit" className="w-full py-3 mt-6 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Deploy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
