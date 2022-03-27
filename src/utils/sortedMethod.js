export let stepsForInser = []
export let stepsForQuick = []
export let stepsForMerg = []
export let quickSwapsCount = 0;
export let meregeSwapsCount = 0;
export let insertSwapsCount = 0;
export let quickComparitionCount = 0;
export let meregeComparitionCount = 0;
export let insertComparitionCount = 0;

let merageHelper = 0
let quickHelper = 0

export const insertionSort = (array) => {
    const list = [...array]
    for (let i = 1; i < list.length; i++) {
      let j = i - 1
      let temp = list[i]
      insertComparitionCount++;
      while (j >= 0 && list[j] > temp) {
        if(array[j + 1] > array[j]){
          insertComparitionCount++ //if in next iterantion will be compare
        }
        list[j + 1] = list[j]
        insertSwapsCount++;
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

  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)

  const newArrayCheck = newLeftArr.concat(newRightArr);
    for (let i = 0; i < array.length; i++) {
      if(array[i] != newArrayCheck[i]) {meregeSwapsCount++} //Bcs pivot is not in newArray
  }

  return mergeArr(newLeftArr,newRightArr);
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
    meregeComparitionCount++;
  }
  // Steps
  if([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)].length > merageHelper){
    stepsForMerg.push([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]);
    merageHelper = [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)].length
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
	for (let i = 0; i < length; i++) {
    quickComparitionCount++;
		if (tempArr[i] <= pivot) {
			left.push(tempArr[i]);
		} else {
			right.push(tempArr[i]);
		}
	}

  const leftEl = quickSort(left)
  const rightEl = quickSort(right)

  const newArrayCheck = leftEl.concat(rightEl);
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] != newArrayCheck[i] && arr[i] != pivot ) {quickSwapsCount++} //Bcs pivot is not in newArray
  }

  // Steps
  stepsForQuick.push([...leftEl, pivot, ...rightEl])
	return newArray.concat(leftEl, pivot,rightEl);
}

export const resetArrays = () => {
   stepsForInser.length = 0
   stepsForQuick.length = 0
   stepsForMerg.length = 0
   merageHelper = 0
   quickHelper = 0
   quickSwapsCount = 0;
   meregeSwapsCount = 0;
   insertSwapsCount = 0;
   quickComparitionCount = 0;
   meregeComparitionCount = 0;
   insertComparitionCount = 0;
}
