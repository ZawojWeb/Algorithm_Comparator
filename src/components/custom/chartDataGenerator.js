import { insertionSort,mergeSort,stepsForMerg,resetArrays,quickSort,stepsForQuick,quickSwapsCount,meregeSwapsCount,insertSwapsCount,quickComparitionCount,meregeComparitionCount,insertComparitionCount } from "../../utils/sortedMethod";
import {randomGenerator} from "../../utils/numGenerator";


const quickSortAvarages = []
const meregeSortAvarages = []
const insertSortAvarages = []


export const avgComparitions = (whichAlgo,howManyRepeats) => {
    quickSortAvarages.length = 0;
    meregeSortAvarages.length = 0;
    insertSortAvarages.length = 0;


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

    resetArrays()
    return [[quickSortAvarages], [meregeSortAvarages],[insertSortAvarages]]
}