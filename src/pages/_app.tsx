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
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
