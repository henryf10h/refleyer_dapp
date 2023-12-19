"use client";

import React, { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import { useContractWrite, useAccount, useContract, useWaitForTransaction } from "@starknet-react/core";
import { factoryAddress, factoryABI } from "../../abis/factory";

const App = () => {
  const { address } = useAccount();
  const isAddressConnected = Boolean(address);
  const buttonText = isAddressConnected ? "Deploy!" : "Connect: Braavos/Argent";

  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '0',
    owner: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { contract } = useContract({
    abi: factoryABI,
    address: factoryAddress,
  });

  const calls = useMemo(() => {
    // Check if all necessary fields are filled
    const isFormDataComplete = formData.name && formData.symbol && formData.supply && formData.owner;
    if (!address || !contract || !isFormDataComplete) return [];
    return [
      contract.populateTransaction["create_token"]!(
        formData.name,
        formData.symbol,
        { low: parseInt(formData.supply) || 0, high: 0 },  // Safe parsing with fallback
        formData.owner
      )
    ];
  }, [contract, address, formData.name, formData.symbol, formData.supply, formData.owner]);

  const { writeAsync, data, isPending } = useContractWrite({ calls });

  const { isLoading, isError, error, data: tx } = useWaitForTransaction({ hash: data?.transaction_hash, watch: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAddressConnected) {
      writeAsync();
    }
    // Otherwise, do nothing (or handle wallet connection logic)
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-black"
       style={{ backgroundImage: `url('/app_bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full max-w-2xl p-8 rounded-lg bg-black">
          <h1 className="text-center text-3xl font-bold text-white mb-8">Deploy a new token 🪙</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'symbol', 'supply', 'owner'].map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-2 font-semibold text-white">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
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
            <button 
              type="submit" 
              className={`w-full py-3 mt-6 ${isAddressConnected ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-700'} text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
              disabled={!isAddressConnected}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );

};

export default App;
