import { DashboardShell } from './';

export function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <div className='flex flex-col items-center justify-center py-20 mt-10 bg-white rounded-lg shadow-sm'>
        <h3 className='text-2xl font-bold'>
          Get feedback on your site instantly.
        </h3>

        <p>Start today, then grow with us 🌱</p>
        <button className='flex flex-row items-center px-4 py-2 mt-5 font-semibold text-white bg-black rounded-md'>
          Upgrade to Starter
        </button>
      </div>
    </DashboardShell>
  );
}
