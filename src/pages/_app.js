import React from 'react';
import '../css/tailwind.css';
import '../css/main.css';
import GoogleFonts from 'next-google-fonts';
import { DefaultSeo } from 'next-seo';
import { ProvideAuth } from '../lib/auth';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={
          router.route === '/' ? 'Fast Feed Back' : '%s | Fast Feed Back'
        }
      />
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' />
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </>
  );
}

export default MyApp;
