import {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import {Chart2} from '../widgets/charts/chart-2'
import SortDispaly from '../custom/SortDisplay'
import Slider from '@mui/material/Slider';
import { insertionSort,mergeSort,stepsForMerg,resetArrays,quickSort,stepsForQuick } from "../../utils/sortedMethod";
import { RadioBtns } from './RadioBtns'

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
  const [items, setItems] = useState(10)
  const [typeOfStartArr, setTypeOfStartArr] = useState('random')
  let generateStartArray = []
  const [startArray , setStartArray] = useState([])
  const [quickSortArray , setQuickSortArray] = useState([])
  const [mergeSortArray , setMergeSortArray] = useState([])
  const [inSort, setInSort] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() =>{
    for (let i = 0; i <= 10; i++) {
      generateStartArray[i] = Math.floor(Math.random()* 1000000)    
    }   
    setStartArray(generateStartArray)
  },[])



  useEffect(() =>{
    generateStartArray.length = 0
    resetArrays()
    if(typeOfStartArr == 'asc'){
      for (let i = 0; i < items; i++) {
        generateStartArray[i] = i
      }
    }else if(typeOfStartArr == 'desc'){
      console.log(startArray);
      for (let i = 0; i < items; i++) {
        generateStartArray[i] = i
      }
      generateStartArray = generateStartArray.reverse()
    }else{
      for (let i = 0; i < items; i++) {
        generateStartArray[i] = Math.floor(Math.random()* 1000000)    
      }
    }
    setStartArray(generateStartArray)
  },[items,typeOfStartArr])

  useEffect(() =>{
    setMergeSortArray(mergeSort(startArray))
    setInSort(insertionSort(startArray))
    setQuickSortArray(quickSort(startArray))  
  }, [startArray])
 

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
      <Box sx={{ marginLeft:'auto', marginRight:'auto' }}>
            <RadioBtns typeOfStartArr={typeOfStartArr} setTypeOfStartArr={setTypeOfStartArr}/>
            <Slider
                aria-label="Temperature"
                defaultValue={10}
                valueLabelDisplay="auto"
                getAriaValueText={e => setItems(e)}
                step={10}
                marks
                min={10}
                max={200}
            />
        </Box>
        <SortDispaly key='random' sortName={"Started Array"} buttonShow={false} array={startArray}/>
        <Box
            sx={{
              display:"flex",
              justifyContent: "start", 
              alignItems: "start"
            }}
          >
              <SortDispaly key='quick' sortName={"Quick Sort"} buttonShow={true} array={quickSortArray} steps={stepsForQuick}/>
              <SortDispaly key='merege' sortName={"Merage Sort"}buttonShow={true} array={mergeSortArray} steps={stepsForMerg}/>
              <SortDispaly key='insort' sortName={"Insertion Sort"}buttonShow={true} array={inSort}/>
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