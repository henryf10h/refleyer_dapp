"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { useContractWrite, useAccount, useContract, useWaitForTransaction, } from "@starknet-react/core";
import { factoryAddress, factoryABI } from "../../abis/factory";
import Modal from '../../components/ui/Modal'; // Import the Modal component

const App = () => {
  const { address } = useAccount();
  const isAddressConnected = Boolean(address);
  const buttonText = isAddressConnected ? "DEPLOY" : "Connect: argentX || braavos";
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const { isLoading, isError, error, data: receipt } = useWaitForTransaction({ hash: data?.transaction_hash, watch: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAddressConnected) {
      try {
        await writeAsync();
        setIsModalOpen(true); // Open the modal
        // ... additional logic
      } catch (error) {
        setIsModalOpen(false); // Close the modal on error
        console.error("Transaction rejected by the user:", error);
      }
    }
  };

  useEffect(() => {
    if (receipt && !isLoading) {
      console.log('Transaction receipt:', receipt);
      console.log(receipt?.events[0].from_address)
      // Handle actions after transaction is confirmed, for example:
      // Display the transaction hash and the deployed contract address from the receipt
    }
  }, [receipt, isLoading]);

  return (
    <>
  <Navbar />
  <div className="flex justify-center items-center min-h-screen bg-black relative overflow-hidden">
    {/* Background image with pulse animation */}
    <img 
      src="/ellipse0.png" 
      alt="Ellipse Background"
      className="absolute top-0 left-0 w-full h-full object-cover animate-pulse z-0"
    />

    {/* Content container */}
    <div className="w-full max-w-2xl h-[600px] p-8 m-4 rounded-lg bg-black z-10 relative overflow-auto lg:absolute lg:top-[200px] shadow-2xl">
  <h1 className="text-center text-3xl font-bold text-white mb-8">Create a new token 🪙</h1>
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
      className={`w-full py-3 mt-6 ${isAddressConnected ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-700'} text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
      disabled={!isAddressConnected}
    >
      {buttonText}
    </button>
  </form>
</div>

  </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Add content for the loading state or the result inside the modal */}
        {isLoading && <p className='text-white'>Loading...</p>}
        {receipt && (
          <div>
            <p className='text-white'>Transaction Hash: {receipt.transaction_hash}</p>
            <p className='text-white'>Contract Address: {receipt.events[0].from_address}</p>
            {/* Display other receipt information */}
          </div>
        )}
      </Modal>
</>

  );

};

export default App;
