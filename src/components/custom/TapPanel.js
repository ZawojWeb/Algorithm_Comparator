import {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ChartDisplay from './ChartDisaply'
import { Box, Button } from '@mui/material';
import SortedEffects from './SortedEffects'
import NextLink from 'next/link'


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Sorted Effects" {...a11yProps(0)} />
          <Tab label="Chart" {...a11yProps(1)} />
          <Tab label="Info" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SortedEffects/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartDisplay/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
            sx={{
              display:"flex",
              justifyContent: "center", 
              alignItems: "center"
            }}
          >
            <NextLink href='https://github.com/ZawojWeb/Algorithm_Comparator/tree/main/src/utils' passHref>
              <Button
                size="small"
                variant="contained"
              >
                SOURCE CODE
              </Button>
            </NextLink>
          </Box>
      </TabPanel>

    </Box>
  );
}