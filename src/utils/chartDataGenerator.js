import { insertionSort,mergeSort,stepsForMerg,resetArrays,quickSortWrap,stepsForQuick,quickSwapsCount,meregeSwapsCount,insertSwapsCount,quickComparitionCount,meregeComparitionCount,insertComparitionCount } from "./sortedMethod";
import {dualPivotQuickSortWrap, quickComparitionCountDQ, quickSwapsCountDQ,reset} from "./dualPivotQuickSort";
import {randomGenerator,ascGenerator,descGenerator} from "./numGenerator";


const quickSortAvarages = []
const dualQuickSortAvarages = []
const meregeSortAvarages = []
const insertSortAvarages = []
const hybrydSortAvarages = []

const quickSortAvaragesRAND = []
const quickSortAvaragesASC = []
const quickSortAvaragesDESC = []
const dualQuickSortAvaragesRAND = []
const dualQuickSortAvaragesASC = []
const dualQuickSortAvaragesDESC = []

const nlnn = []



export const avgComparitions = (whichAlgo,howManyRepeats) => {
    quickSortAvarages.length = 0;
    meregeSortAvarages.length = 0;
    insertSortAvarages.length = 0;
    dualQuickSortAvarages.length = 0;
    hybrydSortAvarages.length = 0;



    if(whichAlgo[0]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArray)
                avg += quickComparitionCount;
            }
            avg = avg / howManyRepeats;
            quickSortAvarages.push(avg)
        }
    }

    if(whichAlgo[1]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                mergeSort(generateStartArray)
                avg += meregeComparitionCount;
            }
            avg = avg / howManyRepeats;
            meregeSortAvarages.push(avg)
        }
    }

    if(whichAlgo[2]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                insertionSort(generateStartArray)
                avg += insertComparitionCount;
            }
            avg = avg / howManyRepeats;
            insertSortAvarages.push(avg)
        }
    }

    if(whichAlgo[3]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                dualPivotQuickSortWrap(generateStartArray)
                avg += quickComparitionCountDQ;
            }
            avg = avg / howManyRepeats;
            dualQuickSortAvarages.push(avg)
        }
    }

    resetArrays()
    reset()
    return [[quickSortAvarages], [meregeSortAvarages],[insertSortAvarages],[dualQuickSortAvarages],[hybrydSortAvarages]]
}

export const avgSwaps = (whichAlgo,howManyRepeats) => {
    quickSortAvarages.length = 0;
    meregeSortAvarages.length = 0;
    insertSortAvarages.length = 0;
    dualQuickSortAvarages.length = 0;
    hybrydSortAvarages.length = 0;
    
    if(whichAlgo[0]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArray)
                avg += quickSwapsCount;
            }
            avg = avg / howManyRepeats;
            quickSortAvarages.push(avg)
        }
    }

    if(whichAlgo[1]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                mergeSort(generateStartArray)
                avg += meregeSwapsCount;
            }
            avg = avg / howManyRepeats;
            meregeSortAvarages.push(avg)
        }
    }

    if(whichAlgo[2]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                insertionSort(generateStartArray)
                avg += insertSwapsCount;
            }
            avg = avg / howManyRepeats;
            insertSortAvarages.push(avg)
        }
    }

    if(whichAlgo[3]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                dualPivotQuickSortWrap(generateStartArray)
                avg += quickSwapsCountDQ;
            }
            avg = avg / howManyRepeats;
            dualQuickSortAvarages.push(avg)
        }
    }

    resetArrays()
    reset()
    return [[quickSortAvarages], [meregeSortAvarages],[insertSortAvarages],[dualQuickSortAvarages],[hybrydSortAvarages]]
}



export const avgComparitionsDiv = (whichAlgo,howManyRepeats) => {
    quickSortAvarages.length = 0;
    meregeSortAvarages.length = 0;
    insertSortAvarages.length = 0;
    dualQuickSortAvarages.length = 0;
    hybrydSortAvarages.length = 0;

    if(whichAlgo[0]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArray)
                avg += quickComparitionCount;
            }
            avg = (avg / howManyRepeats)/index;
            quickSortAvarages.push(avg)
        }
    }

    if(whichAlgo[1]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                mergeSort(generateStartArray)
                avg += meregeComparitionCount;
            }
            avg = (avg / howManyRepeats)/index;
            meregeSortAvarages.push(avg)
        }
    }

    if(whichAlgo[2]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                insertionSort(generateStartArray)
                avg += insertComparitionCount;
            }
            avg = (avg / howManyRepeats)/index;
            insertSortAvarages.push(avg)
        }
    }

    if(whichAlgo[3]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                dualPivotQuickSortWrap(generateStartArray)
                avg += quickComparitionCountDQ;
            }
            avg = (avg / howManyRepeats)/index;
            dualQuickSortAvarages.push(avg)
        }
    }

    resetArrays()
    reset()
    return [[quickSortAvarages], [meregeSortAvarages],[insertSortAvarages],[dualQuickSortAvarages],[hybrydSortAvarages]]
}



export const avgSwapsDiv = (whichAlgo,howManyRepeats) => {
    quickSortAvarages.length = 0;
    meregeSortAvarages.length = 0;
    insertSortAvarages.length = 0;
    dualQuickSortAvarages.length = 0;
    hybrydSortAvarages.length = 0;

    if(whichAlgo[0]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArray)
                avg += quickSwapsCount;
            }
            avg = (avg / howManyRepeats)/index;
            quickSortAvarages.push(avg)
        }
    }

    if(whichAlgo[1]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                mergeSort(generateStartArray)
                avg += meregeSwapsCount;
            }
            avg = (avg / howManyRepeats)/index;
            meregeSortAvarages.push(avg)
        }
    }

    if(whichAlgo[2]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                insertionSort(generateStartArray)
                avg += insertSwapsCount;
            }
            avg = (avg / howManyRepeats)/index;
            insertSortAvarages.push(avg)
        }
    }

    if(whichAlgo[3]){
        let avg = 0;
        for (let index = 100; index <= 1000; index+=100) {
            let generateStartArray = randomGenerator(index)
            avg = 0;
            for (let j = 0; j < howManyRepeats; j++) {
                dualPivotQuickSortWrap(generateStartArray)
                avg += quickSwapsCountDQ;
            }
            avg = (avg / howManyRepeats)/index;
            dualQuickSortAvarages.push(avg)
        }
    }

    resetArrays()
    reset()
    return [[quickSortAvarages], [meregeSortAvarages],[insertSortAvarages],[dualQuickSortAvarages],[hybrydSortAvarages]]
}




export const quickSortVsDualPitovQuickSort = (howManyRepeats,option) =>{
     quickSortAvaragesRAND.length = 0
     quickSortAvaragesASC.length = 0
     quickSortAvaragesDESC.length = 0
     dualQuickSortAvaragesRAND.length = 0
     dualQuickSortAvaragesASC.length = 0
     dualQuickSortAvaragesDESC.length = 0
     nlnn.length = 0;

     let avgQRAND = 0;
     let avgQASC = 0;
     let avgQDESC = 0;
     let avgQDRAND = 0;
     let avgQDASC = 0;
     let avgQDDESC = 0;

     for (let index = 100; index <= 1000; index+=100) {       
        let generateStartArrayRAND = randomGenerator(index)
        let generateStartArrayASC = ascGenerator(index)
        let generateStartArrayDESC = descGenerator(index)
        nlnn.push(index * Math.log(index) * 5)
        
        avgQRAND = 0;
        avgQASC = 0;
        avgQDESC = 0;
        avgQDRAND = 0;
        avgQDASC = 0;
        avgQDDESC = 0;

        if(option ==1 ){
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArrayRAND)
                avgQRAND += quickSwapsCount;
    
                quickSortWrap(generateStartArrayASC)
                avgQASC += quickSwapsCount;
    
                quickSortWrap(generateStartArrayDESC)
                avgQDESC += quickSwapsCount;
    
                dualPivotQuickSortWrap(generateStartArrayRAND)
                avgQDRAND += quickSwapsCountDQ;
    
                dualPivotQuickSortWrap(generateStartArrayASC)
                avgQDASC += quickSwapsCountDQ;
    
                dualPivotQuickSortWrap(generateStartArrayDESC)
                avgQDDESC += quickSwapsCountDQ;

                
            }
        }else if(option ==2){
            for (let j = 0; j < howManyRepeats; j++) {
                quickSortWrap(generateStartArrayRAND)
                avgQRAND += quickComparitionCount;
    
                quickSortWrap(generateStartArrayASC)
                avgQASC += quickComparitionCount;
    
                quickSortWrap(generateStartArrayDESC)
                avgQDESC += quickComparitionCount;
    
                dualPivotQuickSortWrap(generateStartArrayRAND)
                avgQDRAND += quickComparitionCountDQ;
    
                dualPivotQuickSortWrap(generateStartArrayASC)
                avgQDASC += quickComparitionCountDQ;
    
                dualPivotQuickSortWrap(generateStartArrayDESC)
                avgQDDESC += quickComparitionCountDQ;

    
            }
        }
        
        avgQRAND = (avgQRAND / howManyRepeats);
        avgQASC = (avgQASC / howManyRepeats);
        avgQDESC = (avgQDESC / howManyRepeats);
        avgQDRAND = (avgQDRAND / howManyRepeats);
        avgQDASC = (avgQDASC / howManyRepeats);
        avgQDDESC = (avgQDDESC / howManyRepeats);

        quickSortAvaragesRAND.push(avgQRAND)
        quickSortAvaragesASC.push(avgQASC)
        quickSortAvaragesDESC.push(avgQDESC)
        dualQuickSortAvaragesRAND.push(avgQDRAND)
        dualQuickSortAvaragesASC.push(avgQDASC)
        dualQuickSortAvaragesDESC.push(avgQDDESC)

        
        resetArrays()
        reset()
    }
    return [[quickSortAvaragesRAND], [quickSortAvaragesASC],[quickSortAvaragesDESC],[dualQuickSortAvaragesRAND],[dualQuickSortAvaragesASC], [dualQuickSortAvaragesDESC],[nlnn]]
}





