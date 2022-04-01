import 'styles/components.css';
import 'styles/utilities.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/app';
import { AuthContextProvider } from 'contexts';
import { MantineProvider } from '@mantine/core';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily:
            'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          headings: { fontFamily: 'Open sans, sans-serif' },
        }}
      >
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
