import { insertionSort,mergeSort,stepsForMerg,resetArrays,quickSort,stepsForQuick,quickSwapsCount,meregeSwapsCount,insertSwapsCount,quickComparitionCount,meregeComparitionCount,insertComparitionCount } from "./sortedMethod";
import {dualPivotQuickSortWrap, quickComparitionCountDQ, quickSwapsCountDQ,reset} from "./dualPivotQuickSort";
import {randomGenerator} from "./numGenerator";


const quickSortAvarages = []
const dualQuickSortAvarages = []
const meregeSortAvarages = []
const insertSortAvarages = []
const hybrydSortAvarages = []


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
                quickSort(generateStartArray)
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
                quickSort(generateStartArray)
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
                quickSort(generateStartArray)
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
                quickSort(generateStartArray)
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









