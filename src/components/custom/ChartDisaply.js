import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper,TextField } from '@mui/material';
import {Chart2} from '../widgets/charts/chart-2'
import {ChartForm} from './ChartForm'
import {avgComparitions} from './chartDataGenerator'

export default function ChartDisaply() {
  const [howManyRepeats, setHowManyRepeats] = useState(1)
  const [typeOfChart, setTypeOfChart] = useState(1)
  const [whichAlgo, setWhichAlgo] = useState([true,true,true])
  const [data, SetData] = useState([])
  

  const generateChart = (event) =>{
    event.preventDefault();
    data.length = 0
    switch (typeOfChart) {
      case 1:
        SetData(avgComparitions(whichAlgo, howManyRepeats));
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box >
      <ChartForm howManyRepeats={howManyRepeats} setHowManyRepeats={setHowManyRepeats} typeOfChart={typeOfChart} setTypeOfChart={setTypeOfChart} whichAlgo={whichAlgo} setWhichAlgo={setWhichAlgo} generateChart={generateChart}/>
      </Box>
     {data.length > 0 &&  <Chart2 data={data}/>}
    </Box>
  );
}








