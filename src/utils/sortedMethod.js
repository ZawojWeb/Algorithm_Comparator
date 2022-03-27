export let stepsForInser = []
export let stepsForQuick = []
export let stepsForMerg = []
let merageHelper = 0
let QuickHelper = 0

export const insertionSort = (array) => {
    const list = [...array]
    for (let i = 1; i < list.length; i++) {
      let j = i - 1
      let temp = list[i]
      while (j >= 0 && list[j] > temp) {
        list[j + 1] = list[j]
        j--
      }
      list[j+1] = temp
    }
    return list
}

export const mergeSort = array =>{
  
  if (array.length <= 1) {
    return array
  }

  const middleIndex = Math.floor(array.length/2)
  const leftArr = array.slice(0,middleIndex)
  const rightArr = array.slice(middleIndex)

  return mergeArr(mergeSort(leftArr),mergeSort(rightArr));
}

const mergeArr = (leftArr, rightArr) =>{
  const output = []
  let leftIndex = 0
  let rightIndex = 0

  while(leftIndex < leftArr.length && rightIndex < rightArr.length){
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if(leftEl < rightEl){
      output.push(leftEl)
      leftIndex++
    }else{
      output.push(rightEl)
      rightIndex++;
    }
  }
  if(output.length > merageHelper){
    stepsForMerg.push(output);
    merageHelper = output.length
  }
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

export const quickSort = (arr) => {
  let tempArr = [...arr]
  
  if (arr.length <= 1) { 
		return arr;
	} 

	let left = [];
	let right = [];
	let newArray = [];
	let pivot = tempArr.pop();
	let length = tempArr.length;
	for (var i = 0; i < length; i++) {
		if (tempArr[i] <= pivot) {
			left.push(tempArr[i]);
		} else {
			right.push(tempArr[i]);
		}
	}
	return newArray.concat(quickSort(left), pivot, quickSort(right));

}

export const resetArrays = () => {
   stepsForInser.length = 0
   stepsForQuick.length = 0
   stepsForMerg.length = 0
   merageHelper = 0
   QuickHelper = 0
}
