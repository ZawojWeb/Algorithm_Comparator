import { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { MainLayout } from '../components/main-layout';
import { Box, Button } from '@mui/material';
import { ArrowRight as ArrowRightIcon } from '../icons/arrow-right';
import BasicTabs from '../components/custom/TapPanel'

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>
        Algorithm Comparator
        </title>
      </Head>
      <main>
          <BasicTabs/>
      </main>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Home;
