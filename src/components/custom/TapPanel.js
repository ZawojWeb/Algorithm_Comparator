import {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import {Chart2} from '../widgets/charts/chart-2'
import SortDispaly from '../custom/SortDisplay'
import Slider from '@mui/material/Slider';
import { insertionSort,quickSort,mergeSort,countOfSwaps,countOfComparison } from "../../utils/sortedMethod";
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
  const [items, setItems] = useState(50)
  let generateRandomArray = []
  const [randomArray , setRandomArray] = useState([])
  const [quickSortArray , setQuickSortArray] = useState([])
  const [mergeSortArray , setMergeSortArray] = useState([])
  const [inSort, setInSort] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() =>{
    for (let i = 0; i < 50; i++) {
        generateRandomArray[i] = Math.floor(Math.random()* 1000000)    
    }   
    setRandomArray(generateRandomArray)
  },[])



  useEffect(() =>{
    for (let i = 0; i < items; i++) {
        generateRandomArray[i] = Math.floor(Math.random()* 1000000)    
    }
    setRandomArray(generateRandomArray)
  },[items])

  useEffect(() =>{
    setQuickSortArray(quickSort(randomArray))
    setMergeSortArray(mergeSort(randomArray))
    setInSort(insertionSort(randomArray))
  }, [randomArray])
 

   
  useEffect

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
      <Box sx={{ width: 300, marginLeft:'auto', marginRight:'auto' }}>
            <Slider
                aria-label="Temperature"
                defaultValue={50}
                valueLabelDisplay="auto"
                getAriaValueText={e => setItems(e)}
                step={10}
                marks
                min={10}
                max={200}
            />
        </Box>
        <SortDispaly sortName={"Started Array"} buttonShow={false} array={randomArray}/>
        <Box
            sx={{
              display:"flex",
              justifyContent: "center", 
              alignItems: "center"
            }}
          >
              <SortDispaly sortName={"Quick Sort"} buttonShow={true} array={quickSortArray}/>
              <SortDispaly sortName={"Merage Sort"}buttonShow={true} array={mergeSortArray}/>
              <SortDispaly sortName={"Insertion Sort"}buttonShow={true} array={inSort}/>
          </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
            sx={{
              display:"flex",
              justifyContent: "center", 
              alignItems: "center"
            }}
          >
            <Button
              size="small"
              variant="contained"
            >
              SOURCE CODE
            </Button>
           
          </Box>
      </TabPanel>
    </Box>
  );
}