import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper,TextField } from '@mui/material';
import {Chart2} from '../widgets/charts/chart-2'
import {ChartForm} from './ChartForm'
import {avgComparitions,avgSwaps,avgComparitionsDiv,avgSwapsDiv,quickSortVsDualPitovQuickSort} from '../../utils/chartDataGenerator'

export default function ChartDisaply() {
  const [howManyRepeats, setHowManyRepeats] = useState(1)
  const [typeOfChart, setTypeOfChart] = useState(1)
  const [whichAlgo, setWhichAlgo] = useState([true,true,true,false,false])
  const [data, SetData] = useState([])
  const [title, setTitle] = useState('')
  

  const generateChart = (event) =>{
    event.preventDefault();
    data.length = 0

    switch (typeOfChart) {
      case 1:
        SetData(avgComparitions(whichAlgo, howManyRepeats));
        break;
      case 2:
        SetData(avgSwaps(whichAlgo, howManyRepeats));
        break;
      case 3:
        SetData(avgComparitionsDiv(whichAlgo, howManyRepeats));
        break;
      case 4:
        SetData(avgSwapsDiv(whichAlgo, howManyRepeats));
        break;
      case 5:
        SetData(quickSortVsDualPitovQuickSort(howManyRepeats,1));
        break;
      case 6:
        SetData(quickSortVsDualPitovQuickSort(howManyRepeats,2));
        break;
      default:
        break;
    }

    switch (typeOfChart) {
      case 1:
        setTitle('srednią liczbę wykonanych porównań (c) w zależności od n')
        break;
      case 2:
        setTitle('srednią liczbę przestawień kluczy (s) w zależności od n')
        break;
      case 3:
        setTitle('iloraz c/n w zależności od n')
        break;
      case 4:
        setTitle('iloraz s/n w zależności od n')
        break;
      case 5:
        setTitle(`quickSort vs dualPivotQuicksort for SWAPS`)
        break;
      case 6:
        setTitle(`quickSort vs dualPivotQuicksort for COMPARITION`)
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
     {data.length > 0 &&  <Chart2 data={data} titleChart={title} whichAlgo={whichAlgo} typeOfChart={typeOfChart}/>}
    </Box>
  );
}








