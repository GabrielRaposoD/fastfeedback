import React from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { createSite } from '../lib/db';
import { useSnackbar } from '@brancol/react-snackbar';
import { useAuth } from '../lib/auth';
import useSWR, { mutate } from 'swr';
import fetcher from '../utils/fetcher';

ReactModal.setAppElement('#__next');

// MARK: AddSiteModal Props
interface AddSiteModalProps {
  isOpen: boolean;
  onClose?: Function;
  onConfirm?: Function;
}

// MARK: AddSiteModalDeclaration
export default function AddSiteModal({
  isOpen,
  onClose,
  onConfirm,
}: AddSiteModalProps) {
  const { handleSubmit, register } = useForm();
  const auth = useAuth();
  const { data, mutate } = useSWR('api/sites', fetcher);

  const onCreateSite = async ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };

    createSite(newSite);
    snackbar.showSuccess('Site Added With Success!');

    mutate({ sites: [...data.sites, newSite] }, false);
    console.log(data);
    onClose();
  };

  const snackbar = useSnackbar();

  return (
    <ReactModal
      overlayClassName='modal-overlay'
      className='modal modal-mini'
      isOpen={isOpen}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      contentLabel='Example Modal'
    >
      <div className='flex flex-col w-full p-6'>
        <div className='flex flex-row justify-between w-full'>
          <h5 className=' text-xl font-bold'>Add Site</h5>
          <FaTimes
            className='text-3xl text-gray-900 cursor-pointer'
            onClick={() => onClose()}
          />
        </div>
        <form onSubmit={handleSubmit(onCreateSite)}>
          <div className='flex flex-col mt-5'>
            <label htmlFor='siteName' className='text-lg font-semibold'>
              Name
            </label>
            <input
              className='focus:border-primary-500 px-4 py-2 mt-2 border border-black border-solid rounded-md'
              type='text'
              name='name'
              ref={register({
                required: 'Required',
              })}
              id='siteName'
              placeholder='Site Name'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='siteUrl' className='text-lg font-semibold'>
              Url
            </label>
            <input
              className='focus:border-primary-500 px-4 py-2 mt-2 border border-black border-solid rounded-md'
              type='text'
              name='url'
              ref={register({
                required: 'Required',
              })}
              id='siteUrl'
              placeholder='https://website.com'
            />
          </div>

          <div className='flex justify-end mt-10'>
            <button
              className='hover:bg-opacity-75 flex flex-row items-center px-4 py-2 font-semibold text-white transition-all duration-200 ease-in-out bg-black rounded-md'
              type='submit'
            >
              Add Site
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}
