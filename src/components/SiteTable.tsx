import { FaDivide } from 'react-icons/fa';
import { DashboardShell } from './';
import { parseISO, format } from 'date-fns';

function TableRow({ site }) {
  return (
    <tr className=' w-full'>
      <td className='px-4 py-5 text-lg font-medium text-center border-b'>
        {site.name}
      </td>
      <td className='px-4 py-5 text-lg font-medium text-center border-b'>
        {site.url}
      </td>
      <td className='px-4 py-5 text-lg font-medium text-center border-b'>
        <a href='#' className='text-primary-500 hover:text-primary-300'>
          View Feedback
        </a>
      </td>
      <td className='px-4 py-5 text-lg font-medium text-center border-b'>
        {format(parseISO(site.createdAt), 'PPpp')}
      </td>
    </tr>
  );
}

export function SiteTable({ sites }) {
  return (
    <div className='w-full bg-white shadow-sm'>
      <table className='w-full mt-10 shadow-sm table-auto'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='py-3 text-sm text-gray-600 opacity-75'>NAME</th>
            <th className='py-3 text-sm text-gray-600 opacity-75'>SITE LINK</th>
            <th className='py-3 text-sm text-gray-600 opacity-75'>
              FEEDBACK LINK
            </th>
            <th className='py-3 text-sm text-gray-600 opacity-75'>
              DATE ADDED
            </th>
            <th className='py-3 text-sm text-gray-600 opacity-75'>{''}</th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {sites.map((site) => (
            <TableRow site={site} key={site.url} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
