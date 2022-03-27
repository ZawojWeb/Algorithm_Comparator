import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Button,Paper } from '@mui/material';
import { RadioBtns } from './RadioBtns'
import { insertionSort,mergeSort,stepsForMerg,resetArrays,quickSortWrap,stepsForQuick,quickSwapsCount,meregeSwapsCount,insertSwapsCount,quickComparitionCount,meregeComparitionCount,insertComparitionCount } from "../../utils/sortedMethod";
import SortDispaly from '../custom/SortDisplay'
import Slider from '@mui/material/Slider';
import {randomGenerator,ascGenerator,descGenerator} from '../../utils/numGenerator';

export default function SortedEffects() {

    const [items, setItems] = useState(10)
    const [typeOfStartArr, setTypeOfStartArr] = useState('random')
    let generateStartArray = []
    const [startArray , setStartArray] = useState([])
    const [quickSortArray , setQuickSortArray] = useState([])
    const [mergeSortArray , setMergeSortArray] = useState([])
    const [inSort, setInSort] = useState([])
    
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
        generateStartArray = ascGenerator(items)
      }else if(typeOfStartArr == 'desc'){
        generateStartArray = descGenerator(items)
      }else{
        generateStartArray = randomGenerator(items)
      }
      setStartArray(generateStartArray)
    },[items,typeOfStartArr])
  
    useEffect(() =>{
      setMergeSortArray(mergeSort(startArray))
      setInSort(insertionSort(startArray))
      setQuickSortArray(quickSortWrap(startArray))  
    }, [startArray])

  return (
    <>
    <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <RadioBtns typeOfStartArr={typeOfStartArr} setTypeOfStartArr={setTypeOfStartArr} />
          <Slider
              aria-label="Temperature"
              defaultValue={10}
              valueLabelDisplay="auto"
              getAriaValueText={e => setItems(e)}
              step={10}
              marks
              min={10}
              max={200} />
      </Box>
        <SortDispaly key='random' sortName={"Started Array"} buttonShow={false} array={startArray} />
      <Box
        sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start"
        }}
        >
        <SortDispaly key='quick' sortName={"Quick Sort"} buttonShow={true} array={quickSortArray} steps={stepsForQuick} countCompare={quickComparitionCount} countSwaps={quickSwapsCount} />
        <SortDispaly key='merege' sortName={"Merage Sort"} buttonShow={true} array={mergeSortArray} steps={stepsForMerg} countCompare={meregeComparitionCount} countSwaps={meregeSwapsCount} />
        <SortDispaly key='insort' sortName={"Insertion Sort"} buttonShow={true} array={inSort} countCompare={insertComparitionCount} countSwaps={insertSwapsCount} />
       </Box>
    </>
  );
}