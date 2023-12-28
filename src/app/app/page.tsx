"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { useContractWrite, useAccount, useContract, useWaitForTransaction, } from "@starknet-react/core";
import { factoryAddress, factoryABI } from "../../abis/factory";
import Modal from '../../components/ui/Modal'; // Import the Modal component

const App = () => {
  const { address } = useAccount();
  const isAddressConnected = Boolean(address);
  const buttonText = isAddressConnected ? "DEPLOY" : "CONNECT: argentX or braavos";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${label} copied!`);
      setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '',
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
    <img 
      src="/ellipse0.png" 
      alt="Ellipse Background"
      className="absolute top-0 left-0 w-full h-full object-cover animate-pulse z-0"
    />
  <div className="w-full max-w-2xl h-[700px] p-8 m-4 rounded-lg bg-black z-10 relative overflow-auto lg:absolute lg:top-[165px] shadow-2xl">
  <h1 className="text-center text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange">CREATE A NEW TOKEN</h1>
  <form onSubmit={handleSubmit} className="space-y-6">
    {[
      { id: 'name', desc: 'Token Name (e.g., "MyToken")' },
      { id: 'symbol', desc: 'Token Symbol (e.g., "MTK")' },
      { id: 'supply', desc: 'Total Supply (e.g., "1000000")' },
      { id: 'owner', desc: 'Owner Address (e.g., "0x123...abc")' }
    ].map((field) => (
      <div key={field.id} className="flex flex-col">
        <label htmlFor={field.id} className="mb-2 font-semibold text-white">
          {field.id.charAt(0).toUpperCase() + field.id.slice(1)} 
        </label>
        <input
          type={field.id === 'supply' ? 'number' : 'text'}
          id={field.id}
          name={field.id}
          value={formData[field.id]}
          onChange={handleChange}
          className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500"
        />
        <p id={`${field.id}-help`} className="mt-1 text-sm text-gray-500">
          {field.desc}
        </p>
      </div>
    ))}
    <button 
      type="submit" 
      className={`w-full py-3 mt-6 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
        bg-gradient-to-r from-gold to-torange ${isAddressConnected ? '' : 'opacity-75'}`}
      disabled={!isAddressConnected}
    >
      {buttonText}
    </button>
  </form>
 </div>
    <div className="bg-transparent p-4 text-center text-xs text-white absolute z-10 bottom-0">
      © 2023 REFLECTER.FINANCE. All right reserved.
    </div>
 </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {isLoading && (
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src="/load.png"
                alt="Loading"
                className="h-40 w-40 animate-spin"
              />
              <p className='text-white mt-2'>Loading...</p>
            </div>
          )}
          {receipt && (
            <div className="p-4 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <span>Transaction Hash:</span>
                <span className="font-mono bg-gray-800 p-1 rounded">{receipt.transaction_hash}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(receipt.transaction_hash)}
                  className="ml-2"
                >
                  <img src="/copy.png" alt="Copy" className="inline h-6 w-6 bg-gray-800" />
                </button>
                <a
                  href={`https://starkscan.co/tx/${receipt.transaction_hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img src="/link.png" alt="Link" className="inline h-6 w-6" />
                </a>
                {copySuccess && <div className="text-sm text-green-500">{copySuccess}</div>}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <span>Contract Address:</span>
                <span className="font-mono bg-gray-800 p-1 rounded">{receipt.events[0].from_address}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(receipt.events[0].from_address)}
                  className="ml-2"
                >
                  <img src="/copy.png" alt="Copy" className="inline h-6 w-6 bg-gray-800" />
                </button>
                <a
                  href={`https://starkscan.co/contract/${receipt.events[0].from_address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img src="/link.png" alt="Link" className="inline h-6 w-6" />
                </a>
                {copySuccess && <div className="text-sm text-green-500">{copySuccess}</div>}
              </div>
            </div>
          )}
        </Modal>

</>

  );

};

export default App;
