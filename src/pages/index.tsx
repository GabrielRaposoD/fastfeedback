import { BrandGithub, BrandGoogle } from 'tabler-icons-react';
import { Button, Container, Text } from '@mantine/core';

import Link from 'next/link';
import { useAuth } from 'contexts';

export default function Home() {
  const auth = useAuth();

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='bg-[#EDF2F7] py-[4rem]'>
        <Container size='sm'>
          <svg
            viewBox='0 0 46 32'
            focusable='false'
            role='presentation'
            className='w-12 mb-4'
          >
            <path
              d='M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z'
              fill='currentColor'
            ></path>
          </svg>
          <Text size='xl' className='mb-10'>
            <span className='font-bold'>Fast Feedback</span> is the easiest way
            to add comments or reviews to your static site. Try it out by
            leaving a comment below. After the comment is approved, it will
            display below.
          </Text>
          {auth.user ? (
            <Link href='sites'>
              <Button color='dark' size='md' component='a'>
                View Dashboard
              </Button>
            </Link>
          ) : (
            <div className='gap-x-4 flex flex-row'>
              <Button
                color='dark'
                onClick={() => auth.signInWithGitHub()}
                leftIcon={<BrandGithub color='white' />}
                size='md'
              >
                Continue with GitHub
              </Button>
              <Button
                color='dark'
                onClick={() => auth.signInWithGoogle()}
                leftIcon={<BrandGoogle color='black' />}
                variant='white'
                size='md'
              >
                Continue with Google
              </Button>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
}
