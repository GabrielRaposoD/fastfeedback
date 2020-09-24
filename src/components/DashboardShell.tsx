import { Header, Footer } from './';

export function DashboardShell({ children }) {
  return (
    <div className=' flex flex-col'>
      <Header />
      <div className='flex flex-col justify-between min-h-screen bg-gray-300 bg-opacity-75'>
        <div className='container mx-auto mt-32'>
          <div className=' px-4'>
            <p>Sites</p>
            <h2 className='text-4xl font-bold'>My Sites</h2>
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
