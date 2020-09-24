import { useState } from 'react';
import { DashboardShell } from './';
import AddSiteModal from '../modal/AddSiteModal';

export function EmptyState() {
  const [isOpen, setOpen] = useState(false);

  return (
    <DashboardShell>
      <AddSiteModal isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className='flex flex-col items-center justify-center py-20 mt-10 bg-white rounded-lg shadow-sm'>
        <h3 className='text-2xl font-bold'>You haven't added any sites.</h3>

        <p>Welcome 👋, Let's get started.</p>
        <button
          className='hover:bg-opacity-75 flex flex-row items-center px-4 py-2 mt-5 font-semibold text-white transition-all duration-200 ease-in-out bg-black rounded-md'
          onClick={() => setOpen(true)}
        >
          Add Your First Site
        </button>
      </div>
    </DashboardShell>
  );
}
