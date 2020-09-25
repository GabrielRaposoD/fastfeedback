import { Header, Footer } from './';
import AddSiteModal from '../modal/AddSiteModal';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export function DashboardShell({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=' flex flex-col'>
      <AddSiteModal isOpen={isOpen} onClose={() => setOpen(false)} />
      <Header />
      <div className='flex flex-col justify-between min-h-screen bg-gray-300 bg-opacity-75'>
        <div className='container mx-auto mt-32'>
          <div className='flex flex-col px-4'>
            <p>Sites</p>
            <div className='flex flex-row justify-between'>
              <h2 className='text-4xl font-bold'>My Sites</h2>
              <button
                className='hover:bg-opacity-75 flex flex-row items-center px-4 py-2 mt-5 font-semibold text-white transition-all duration-200 ease-in-out bg-black rounded-md'
                onClick={() => setOpen(true)}
              >
                <FaPlus className='mr-2 text-sm text-white' />
                Add Site
              </button>
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
