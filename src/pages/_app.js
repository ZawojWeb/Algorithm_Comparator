import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Toaster } from 'react-hot-toast';
import nProgress from 'nprogress';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '../theme';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);


const App = (props) => {
  const { Component, e, pageProps } = props;

  return (
    <>
      <Head>
        <title>
          Material Kit Pro
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
     
                  <ThemeProvider
                    theme={createTheme({
                      mode: 'dark'
                    })}
                  >
                      <CssBaseline />
                      <Toaster position="top-center" />
                            <Component {...pageProps} />
                  </ThemeProvider>
    </>
  );
};

export default App;
