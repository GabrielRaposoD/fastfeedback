import { NextSeo } from 'next-seo';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';

export default function Index() {
  const auth = useAuth();

  return (
    <>
      <NextSeo
        title='Fast Feed Back'
        description='Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem.'
      />
      <div className='flex flex-col items-center justify-center min-h-screen overflow-hidden text-black'>
        <h1 className='text-4xl font-semibold'>Hello World</h1>
        <div className='flex flex-row'>
          <button onClick={(e) => auth.signinWithGitHub()}>Sign-in</button>
          {auth?.user && (
            <button className='ml-4' onClick={(e) => auth.signout()}>
              Sign-out
            </button>
          )}
        </div>
        <p>{auth?.user?.email}</p>
      </div>
    </>
  );
}
