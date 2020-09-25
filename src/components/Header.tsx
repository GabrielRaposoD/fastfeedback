export function Header() {
  return (
    <div className='fixed top-0 w-full bg-white'>
      <div className='bg-gradient-to-r from-primary-400 to-primary-600 h-1' />

      <div className='container flex flex-row items-center justify-between py-3 mx-auto'>
        <div className='flex flex-row font-semibold'>
          <svg
            viewBox='0 0 46 32'
            focusable='false'
            role='presentation'
            className='flex flex-row h-6 mr-6'
          >
            <path
              d='M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z'
              fill='currentColor'
            ></path>
          </svg>
          <a href='#' className='mr-4'>
            Sites
          </a>
          <a href='#' className=''>
            Feedback
          </a>
        </div>
        <div>
          <img
            src='https://via.placeholder.com/150'
            alt=''
            className='h-8 rounded-full'
          />
        </div>
      </div>
    </div>
  );
}
