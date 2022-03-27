import { Button, Text } from '@mantine/core';

import { useAuth } from 'contexts';

export default function Home() {
  const auth = useAuth();
  console.log(auth.user);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-6 py-2'>
      <Text>
        Fast Feedback was built as part of React 2025. It's the easiest way to
        add comments or reviews to your static site. Try it out by leaving a
        comment below. After the comment is approved, it will display below.
      </Text>
      <Button color='dark' onClick={() => auth.signInWithGitHub('/')}>
        Github Login
      </Button>
      <Button color='dark' onClick={() => auth.signInWithGoogle('/')}>
        Google Login
      </Button>
    </div>
  );
}
