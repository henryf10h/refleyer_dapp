"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import { useContractWrite, useAccount, useContract, useWaitForTransaction, useNetwork} from "@starknet-react/core";
import { factoryAddress, factoryABI } from "../../abis/factory";
import Modal from '../../components/ui/Modal'; // Import the Modal component

const App = () => {
  const { address } = useAccount();
  const isAddressConnected = Boolean(address);
  const buttonText = isAddressConnected ? "DEPLOY" : "CONNECT: argentX or braavos";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const { chain } = useNetwork()

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

  const getChainNameForUrl = (fullChainName) => {
    const parts = fullChainName.split(' ');
    // Check if the second part is "Goerli" and return "testnet" instead
    if (parts.length > 1) {
      return parts[1].toLowerCase() === 'goerli' ? 'testnet' : parts[1].toLowerCase();
    }
    return '';
  };

  const networkPart = getChainNameForUrl(chain.name);

  useEffect(() => {
    if (receipt && !isLoading) {
      console.log('Transaction receipt:', receipt);
      console.log(receipt?.events[0].from_address);
      console.log(chain.name);
      // Handle actions after transaction is confirmed, for example:
      // Display the transaction hash and the deployed contract address from the receipt
    }
  }, [receipt, isLoading]);

  return (

<div className='flex flex-col justify-between w-screen min-h-screen bg-black items-center'>
  <Navbar/>
  <img 
      src="/ellipse0.png" 
      alt="Ellipse Background"
      className="fixed inset-0 w-screen h-screen object-cover animate-pulse z-0"
    />
       <div className=" border border-white w-full max-w-2xl rounded-lg bg-black p-8 m-8 z-10 relative content-fit">

         <h1 className="text-center text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange font-pixeled leading-normal">CREATE A NEW TOKEN</h1>

         <form onSubmit={handleSubmit} className="space-y-7">
          {[
           { id: 'name', desc: 'Token Name (e.g., "MyToken")' },
           { id: 'symbol', desc: 'Token Symbol (e.g., "MTK")' },
          { id: 'supply', desc: 'Total Supply (e.g., "1000000")' },
           { id: 'owner', desc: 'Owner Address (e.g., "0x123...abc")' }
         ].map((field) => (
           <div key={field.id} className="flex flex-col ">
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
               placeholder={field.desc}
               required
              />
           </div>
         ))}
          <button 
           type="submit" 
           className={`w-full py-3 mt-6 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
             bg-gradient-to-r from-gold to-torange ${isAddressConnected ? '' : 'opacity-50'}`}
           disabled={!isAddressConnected}
          >
            {buttonText}
          </button>
         </form>
      </div>

      <footer className="p-4 text-center text-xs text-white bg-transparent z-10">
          © 2023 REFLECTER.FINANCE. All rights reserved.
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {isLoading && (
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src="/load.png"
                alt="Loading"
                className="h-20 w-20 sm:h-40 sm:w-40 animate-spin"
              />
              <h1 className="text-center text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange font-pixeled leading-normal">Loading...</h1>
            </div>
          )}
          {receipt && (
            <>
              <div className='flex flex-col justify-center items-center'>
                <h1 className="text-center font-bold mb-4 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange leading-normal sm:text-lg font-pixeled">CONGRATULATIONS!</h1>
                <p className='text-white text-center'>You just deployed a new token successfully 🥳</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 p-4">
                <span className='text-white'>Transaction Hash:</span>
                <span className="font-mono bg-gray-800 p-1 rounded max-w-full overflow-x-auto text-white text-xs sm:text-sm">{receipt.transaction_hash}</span>
                <button
                  onClick={() => handleCopy(receipt.transaction_hash, "Transaction Hash")}
                  className="ml-2"
                >
                  <img src="/copy.png" alt="Copy" className="inline h-6 w-6 bg-gray-800" />
                </button>
                <a
                  href={`https://${networkPart}.starkscan.co/tx/${receipt.transaction_hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img src="/link.png" alt="Link" className="inline h-6 w-6" />
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <span className='text-white'>Contract Address:</span>
                <span className="font-mono bg-gray-800 p-1 rounded max-w-full overflow-x-auto text-white text-xs sm:text-sm">{receipt.events[0].from_address}</span>
                <button
                  onClick={() => handleCopy(receipt.events[0].from_address, "Contract Address")}
                  className="ml-2"
                >
                  <img src="/copy.png" alt="Copy" className="inline h-6 w-6 bg-gray-800" />
                </button>
                <a
                  href={`https://${networkPart}.starkscan.co/contract/${receipt.events[0].from_address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img src="/link.png" alt="Link" className="inline h-6 w-6" />
                </a>
              </div>
              <div className={`text-sm text-green-500 mt-2 ${copySuccess ? '' : 'invisible'}`}>
                {copySuccess || 'Placeholder'}
              </div>
              </>
          )}
          
    </Modal>

</div>






  );

};

export default App;
